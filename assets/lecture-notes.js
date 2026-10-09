/* Lecture Notes: renders the course cards and weekly lists.
   A week is shown only when its notes PDF exists on the server. */
(function(){
  var DATA = window.LECTURE_NOTES || {};

  function pad(n){ return (n < 10 ? '0' : '') + n; }
  function fileName(c, w, f){ return c.prefix + '_Week' + pad(w.week) + '_' + f.suffix + '.' + f.ext; }
  function exists(url){
    return fetch(url, { method: 'HEAD', cache: 'no-store' })
      .then(function(r){ return r.ok; })
      .catch(function(){ return false; });
  }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(ch){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[ch]; }); }

  /* Weeks whose notes PDF is online */
  function publishedWeeks(c){
    var notes = c.files[0];
    return Promise.all(c.weeks.map(function(w){
      return exists(c.folder + fileName(c, w, notes)).then(function(ok){ return ok ? w : null; });
    })).then(function(list){ return list.filter(Boolean); });
  }

  /* ---------- hub page ---------- */
  function renderHub(box){
    var n = 1;
    Object.keys(DATA).forEach(function(key){
      var c = DATA[key];
      var meta = [c.term, c.schedule, 'Code ' + c.code].join(' &middot; ');
      var a = document.createElement('a');
      a.className = 'course-card';
      a.href = c.page;
      a.innerHTML =
        '<span class="course-num">' + pad(n++) + '</span>' +
        '<h3>' + esc(c.title) + '</h3>' +
        '<div class="course-meta">' + meta + '</div>' +
        '<p>' + esc(c.summary) + '</p>' +
        '<div class="course-foot"><span class="course-status">Checking for notes&hellip;</span>' +
        '<span class="course-go">Open course &rarr;</span></div>';
      box.appendChild(a);
      publishedWeeks(c).then(function(ws){
        var s = a.querySelector('.course-status');
        if (!ws.length){ s.textContent = 'No notes published yet'; return; }
        s.textContent = ws.length + (ws.length === 1 ? ' week' : ' weeks') + ' published';
        s.classList.add('live');
      });
    });
  }

  /* ---------- course page ---------- */
  function chip(href, label, ext, download){
    var dl = download ? ' download="' + esc(download) + '"' : ' target="_blank" rel="noopener"';
    return '<a class="file-chip" href="' + href + '"' + dl + '>' +
      '<span class="file-ext">' + ext.toUpperCase() + '</span>' + esc(label) + '</a>';
  }

  /* Assignment block inside a week; shown only when its first file is online */
  function assignmentBlock(c, w){
    var a = w.assignment;
    if (!a || !a.files || !a.files.length) return Promise.resolve('');
    return Promise.all(a.files.map(function(f){
      var url = c.folder + f.file;
      return exists(url).then(function(ok){ return ok ? chip(url, f.label, f.ext, f.download) : ''; });
    })).then(function(chips){
      if (!chips[0]) return '';
      return '<div class="assignment">' +
        '<div class="assignment-head"><span class="assignment-tag">' + esc(a.label) + '</span>' +
        '<span class="assignment-due">Due ' + esc(a.due) + '</span></div>' +
        '<p class="assignment-title">' + esc(a.title) + '</p>' +
        (a.note ? '<p class="assignment-note">' + esc(a.note) + '</p>' : '') +
        '<div class="week-files">' + chips.join('') + '</div></div>';
    });
  }

  function renderCourse(key){
    var c = DATA[key];
    var list = document.getElementById('weeks');
    var docsBox = document.getElementById('documents');

    publishedWeeks(c).then(function(ws){
      if (!ws.length){
        list.innerHTML = '<p class="week-empty">No notes have been published yet. Each week&#8217;s material will appear here before the class.</p>';
        return;
      }
      /* newest week first */
      ws.sort(function(a, b){ return b.week - a.week; });
      return Promise.all(ws.map(function(w){
        return Promise.all(c.files.map(function(f, i){
          var url = c.folder + fileName(c, w, f);
          return (i === 0 ? Promise.resolve(true) : exists(url)).then(function(ok){
            return ok ? chip(url, f.label, f.ext) : '';
          });
        })).then(function(chips){
          return assignmentBlock(c, w).then(function(asg){ return [chips, asg]; });
        }).then(function(res){
          var chips = res[0], asg = res[1];
          return '<article class="week" id="week-' + pad(w.week) + '">' +
            '<div class="week-when"><b>Week ' + pad(w.week) + '</b><span>' + esc(w.date) + '</span></div>' +
            '<div class="week-body"><h3>' + esc(w.title) + '</h3>' +
            '<p>' + esc(w.detail) + '</p>' +
            (w.reading ? '<p class="week-reading"><span>Reading</span>' + esc(w.reading) + '</p>' : '') +
            '<div class="week-files">' + chips.join('') + '</div>' + asg + '</div></article>';
        });
      })).then(function(rows){
        list.innerHTML = rows.join('');
        /* banner for assignments that are online and not yet due */
        var now = new Date();
        var open = ws.filter(function(w){
          return w.assignment && w.assignment.dueISO && now <= new Date(w.assignment.dueISO) &&
                 list.querySelector('#week-' + pad(w.week) + ' .assignment');
        });
        if (open.length){
          var b = document.createElement('div');
          b.className = 'assignment-banner';
          b.innerHTML = open.map(function(w){
            return '<span class="assignment-tag">' + esc(w.assignment.label) + '</span>' +
              '<span>is open &middot; due ' + esc(w.assignment.due) + '</span>' +
              '<a href="#week-' + pad(w.week) + '">Go to Week ' + pad(w.week) + ' &rarr;</a>';
          }).join('<br>');
          list.parentNode.insertBefore(b, list);
        }
      });
    });

    var note = document.getElementById('protected-note');
    if (note && c.protectedNote){ note.textContent = c.protectedNote; note.hidden = false; }

    var resBox = document.getElementById('resources');
    if (resBox && c.resources && c.resources.length){
      resBox.innerHTML = c.resources.map(function(r){
        return '<a class="resource" href="' + r.url + '" target="_blank" rel="noopener">' +
          '<span class="resource-title">' + esc(r.title) + '</span>' +
          '<span class="resource-meta">' + esc(r.authors) + ' &middot; ' + esc(r.note) + '</span>' +
          '<span class="resource-url">' + esc(r.url.replace(/^https?:\/\//, '').replace(/\/$/, '')) + ' &#8599;</span></a>';
      }).join('');
      document.getElementById('resources-section').hidden = false;
    }

    if (docsBox && c.documents && c.documents.length){
      Promise.all(c.documents.map(function(d){
        var url = c.folder + d.file;
        return exists(url).then(function(ok){
          return ok ? chip(url, d.label, d.file.split('.').pop()) : '';
        });
      })).then(function(chips){
        var html = chips.join('');
        if (html){
          docsBox.innerHTML = html;
          document.getElementById('documents-section').hidden = false;
        }
      });
    }
  }

  window.LectureNotes = { renderHub: renderHub, renderCourse: renderCourse };
})();
