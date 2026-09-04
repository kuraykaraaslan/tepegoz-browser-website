import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/download.md (status: ready)
 * @sourceSha256 369699c2 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/download.ts`. Kaynak belgedeki "haber ver"
 * e-posta alanı burada da bilerek yoktur: bu site arka ucu olmayan bir statik
 * dışa aktarımdır ve barındırılan her form sağlayıcısı, site kurallarının
 * yasakladığı bir üçüncü taraf betiğidir.
 */
export const download: PageContent = {
  route: '/download',
  title: 'Tepegöz’ü indirin',
  description:
    'Windows, macOS ve Linux için imzalı yapılar — ya da kaynaktan üç komut. Kendi anahtarınızı getirin. Ön sürüm, kanıtlanmamış olan konusunda dürüst.',
  status: 'ready',

  hero: {
    eyebrow: 'İndir',
    headline: 'Tepegöz’ü indirin.',
    subhead:
      'Windows, macOS ve Linux için imzalı yapılar. Hesap yok, telemetri yok, arka uç yok — kendi yapay zekâ anahtarınızı ekleyin, çalışsın.',
    ctas: [
      { label: 'Sürümler', href: `${SITE.repo}/releases/latest`, variant: 'primary', external: true },
      { label: 'Gerçekte ne bitti', href: '/roadmap', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'downloads',
      eyebrow: 'İndirmeler',
      heading: 'Platformunuzu seçin.',
      blocks: [
        {
          kind: 'table',
          caption: 'Mevcut yapılar',
          head: ['Platform', 'Biçim'],
          rows: [
            ['**Windows**', 'Kurulum dosyası (`.exe`)'],
            ['**macOS**', 'Disk kalıbı (`.dmg`)'],
            ['**Linux**', '`.deb` · `.rpm` · `.tar.gz`'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Birincil hedef Windows 11’dir. macOS ve Linux her gönderimde derlenir ve test takımının tamamını geçer, ama elle daha az test edilir.',
          ],
        },
      ],
    },

    {
      id: 'verify',
      eyebrow: 'Bütünlük',
      heading: 'İndirdiğinizi doğrulayın.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Her sürüm, ikili dosyaların yanında bir sağlama toplamı yayımlar. Yapılar Windows’ta kod imzalıdır ve macOS’ta noter onaylıdır, yani işletim sisteminiz sizi uyarmayacaktır — ama imza dosyanın bizden geldiğini, sağlama toplamı ise sağlam ulaştığını söyler. İkisi de otuz saniyeye değer.',
            'Hiçbir ikili dosyayı çalıştırmamayı tercih ederseniz **kaynaktan derleyin** — aşağıdaki adımlar, okuyabileceğiniz koddan aynı uygulamayı üretir.',
          ],
        },
      ],
    },

    {
      id: 'key',
      eyebrow: 'Sonra bir anahtar ekleyin',
      heading: 'Tarayıcı anahtarsız da çalışır. Ajanın bir modele ihtiyacı var.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Ayarlar’ı açın ve Anthropic, OpenAI, Google ya da Kimi’den bir anahtar ekleyin — ya da yerel bir modele yöneltip tamamen çevrimdışı çalışın.',
            'Anahtarınız işletim sisteminizin anahtar zinciriyle şifrelenir ve ayrıcalıklı süreçte kalır. Sağlayıcınıza doğrudan ödersiniz; Tepegöz hesabı yoktur ve hiçbir şey üzerimizden geçmez.',
          ],
        },
      ],
    },

    {
      id: 'build',
      eyebrow: 'Kaynaktan derleme',
      heading: 'Üç komut.',
      lede: 'Beş dakika ve gerçekten basit — derleyici adımı yok, yeniden derlenecek yerel bir veritabanı yok.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Node.js 24 ya da üstü** — Electron 43’ün gömdüğü çalışma zamanının aynısı, böylece uygulama ve testleri aynı zeminde koşar',
            '**pnpm 10 ya da üstü**',
          ],
        },
        {
          kind: 'code',
          language: 'sh',
          label: 'Uçbirim',
          code: `git clone ${SITE.repo}.git
cd tepegoz-browser
pnpm install --frozen-lockfile
pnpm dev`,
        },
        {
          kind: 'prose',
          body: [
            'Hepsi bu kadar. Yapı araçları yok, Python yok, C++ araç zinciri yok, derlenecek veritabanı yok.',
          ],
        },
      ],
    },

    {
      id: 'expect',
      eyebrow: 'Elinize ne geçiyor',
      heading: 'Ön sürüm yazılım.',
      lede: 'Bir şeyler bozulacak ve önemli bir işi ona emanet etmeden önce bilmeye değer iki belirli eksik var.',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            '**Bağımsız bir güvenlik denetimi yapılmadı.** Tehdit modeli yayımlandı ve mimari okunabilir durumda, ama dışarıdan hiç kimse incelemedi.',
            '**Otomasyon bağımsız olarak kıyaslanmadı.** Düşmanca test bataryası ve karşılaştırmalı ölçüm yazıldı ve önceden kaydedildi; koşuların parası ödenmedi, yani ölçülmüş bir saldırı başarı oranı ya da görev başarı sayısı yok ve olana kadar da bir sayı söylemeyeceğiz.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'Güvenebilecekleriniz: [AGPL-3.0](/legal/license) lisanslıdır, kaynağın tamamı açıktır, hesap yoktur, telemetri yoktur ve arka uç yoktur — ayrıca bildiğimiz sorunlar siz keşfedin diye bırakılmak yerine yazılmıştır.',
            `Bilinen sorunlar [bilinen sorunlar](${REPO_FILES.knownIssues}) belgesinde yayımlanır. Faz faz durum [yol haritasındadır](${REPO_FILES.phases}).`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Çalıştırın ve neyin bozulduğunu söyleyin.',
    ctas: [
      { label: 'Hata bildirin', href: SITE.repoIssues, variant: 'primary', external: true },
      { label: 'Güvenlik açığını özel olarak bildirin', href: '/security', variant: 'outline' },
    ],
  },
};
