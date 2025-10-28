# Panduan Deployment ke GitHub Pages

## Konfigurasi GitHub Pages

### 1. Persiapan Repository

Pastikan repository Anda sudah di-push ke GitHub.

### 2. Konfigurasi GitHub Pages

1. Buka repository Anda di GitHub
2. Pergi ke **Settings** > **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**

### 3. Konfigurasi Base Path

#### Untuk User/Organization Page (username.github.io)
File `.github/workflows/deploy.yml` sudah dikonfigurasi dengan `VITE_BASE_PATH: '/'`

Tidak perlu mengubah apa pun - sudah benar untuk deployment di root directory.

#### Untuk Project Page (username.github.io/nama-repository)
Edit file `.github/workflows/deploy.yml` dan ubah bagian ini:

```yaml
- name: Build
  run: npm run build
  env:
    # Uncomment dan sesuaikan dengan nama repository Anda
    VITE_BASE_PATH: '/nama-repository-anda/'
```

Ganti `nama-repository-anda` dengan nama repository GitHub Anda.

### 4. Deploy

Setelah konfigurasi selesai:

1. Push perubahan ke branch `main`:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. GitHub Actions akan otomatis menjalankan workflow deployment

3. Setelah selesai, website Anda akan tersedia di:
   - User/org page: `https://username.github.io/`
   - Project page: `https://username.github.io/nama-repository/`

### 5. Cek Status Deployment

1. Buka tab **Actions** di repository GitHub Anda
2. Lihat workflow "Deploy to GitHub Pages"
3. Jika ada error, klik untuk melihat log detail

## Build Lokal

Untuk test build lokal sebelum deploy:

```bash
# Install dependencies
npm install

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

## Troubleshooting

### GitHub Pages menampilkan halaman kosong

**Penyebab**: Base path tidak sesuai dengan jenis GitHub Pages Anda

**Solusi**:
- Untuk project page, pastikan `VITE_BASE_PATH` di workflow sesuai dengan nama repository
- Untuk user/org page, pastikan `VITE_BASE_PATH: '/'`

### Assets (CSS/JS) tidak load

**Penyebab**: Base path salah

**Solusi**: 
1. Periksa Console di browser (F12)
2. Jika path dimulai dengan `username.github.io/assets/...` padahal seharusnya `username.github.io/repo/assets/...`, maka base path perlu diupdate di workflow
3. Push ulang dengan konfigurasi yang benar

### Workflow gagal

**Solusi**:
1. Pastikan GitHub Pages sudah diaktifkan dengan source "GitHub Actions"
2. Periksa log error di tab Actions
3. Pastikan `package.json` memiliki script `build`

## Development di Replit

Untuk development di Replit, aplikasi berjalan di port 5000:

```bash
npm run dev
```

Buka di browser Replit untuk melihat preview.
