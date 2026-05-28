# Site Kurulum Rehberi — eminahmetkaplan.com

Bu klasör, web sitenizin tüm dosyalarını içerir. Aşağıdaki adımları sırayla
takip ederek siteyi ücretsiz olarak GitHub Pages üzerinde yayına alabilirsiniz.
Takıldığınız her adımda bana yazın, birlikte ilerleriz.

## Klasördeki dosyalar
- `index.html` — Ana sayfa
- `publications.html` — Tüm yayınlar
- `cv.html` — İngilizce özgeçmiş
- `CNAME` — Alan adı bağlantısı (dokunmayın, hazır)
- `assets/` — Stil dosyası, fotoğraf ve favicon

---

## ADIM 1 — Dosyaları GitHub'a yükleyin
1. github.com'a `ekowaryans-cmd` hesabınızla girin.
2. Sağ üstte "+" > **New repository**.
3. Repository name: **eminahmetkaplan** yazın. **Public** seçili kalsın.
   "Create repository" deyin.
4. Açılan sayfada **uploading an existing file** bağlantısına tıklayın.
5. Bu klasörün İÇİNDEKİ tüm öğeleri (index.html, publications.html, cv.html,
   CNAME ve assets klasörü) sürükleyip bırakın.
   (Klasörün kendisini değil, içindekileri yükleyin.)
6. Aşağıda **Commit changes** deyin.

## ADIM 2 — GitHub Pages'i açın
1. Deponun üst menüsünden **Settings** > sol menüden **Pages**.
2. "Build and deployment" altında Source: **Deploy from a branch**.
3. Branch: **main** / klasör: **/ (root)** seçip **Save**.
4. Bir dakika içinde siteniz `ekowaryans-cmd.github.io/eminahmetkaplan`
   adresinde yayına girer. Önce burada çalıştığını görün.

## ADIM 3 — Alan adını bağlayın (Squarespace)
Alan adınız artık Squarespace Domains'te. DNS ayarını orada yapacağız.
1. Squarespace Domains hesabınıza girin > `eminahmetkaplan.com` > **DNS Settings**.
2. Aşağıdaki kayıtları ekleyin:

   **A kayıtları** (Host: @ — dördünü de ekleyin):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

   **CNAME kaydı:**
   - Host: `www`  →  Değer: `ekowaryans-cmd.github.io`

   Not: Sonu `.googlehosted.com` ile biten mevcut kaydı ve e-posta (MX)
   kayıtlarını SİLMEYİN.

3. GitHub'da Settings > Pages > "Custom domain" kutusuna
   **www.eminahmetkaplan.com** yazıp Save deyin (CNAME dosyası zaten hazır).
4. DNS yayılması birkaç saat sürebilir. Doğrulama tamamlanınca
   **Enforce HTTPS** kutusunu işaretleyin.

## ADIM 4 — Eski Google Sites'ı kapatın
Yeni site alan adında çalıştığını doğruladıktan sonra eski Google Sites
sitesini yayından kaldırın.

---

## İleride güncelleme yapmak
1. github.com > `eminahmetkaplan` deposu > değiştirmek istediğiniz dosya
   (ör. yeni yayın için `publications.html`).
2. Kalem (Edit) simgesine basın, ilgili bloğu kopyalayıp metnini değiştirin,
   **Commit changes** deyin. Site ~1 dakikada güncellenir.
3. Zorlanırsanız bana söyleyin; güncel dosyayı hazırlayıp veririm, siz sadece
   yüklersiniz.

## Güvenlik
GitHub ve Squarespace hesaplarınızda **iki adımlı doğrulamayı (2FA)** açın.
Statik sitede asıl koruma budur.
