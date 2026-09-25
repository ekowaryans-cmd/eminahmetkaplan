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
  function chip(href, label, ext){
    return '<a class="file-chip" href="' + href + '" target="_blank" rel="noopener">' +
      '<span class="file-ext">' + ext.toUpperCase() + '</span>' + esc(label) + '</a>';
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
          return '<article class="week">' +
            '<div class="week-when"><b>Week ' + pad(w.week) + '</b><span>' + esc(w.date) + '</span></div>' +
            '<div class="week-body"><h3>' + esc(w.title) + '</h3>' +
            '<p>' + esc(w.detail) + '</p>' +
            (w.reading ? '<p class="week-reading"><span>Reading</span>' + esc(w.reading) + '</p>' : '') +
            '<div class="week-files">' + chips.join('') + '</div></div></article>';
        });
      })).then(function(rows){ list.innerHTML = rows.join(''); });
    });

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
