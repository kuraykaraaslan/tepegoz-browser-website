import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/blog.md (status: ready)
 * @sourceSha256 b7fb6b12 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/blog.ts`. Dizin sayfası ve yayın ilkesi.
 * Yazılar ayrı içerik dosyalarıdır; yayımlanmış tek yazının kendi rotası var,
 * yolda olanlar listelenir ama bağlanmaz — henüz yazılmadılar ve bu site ölü
 * bağlantı dağıtmaz.
 */
export const blog: PageContent = {
  route: '/blog',
  title: 'Yapım günlüğü — Tepegöz',
  description:
    'Açıkta geliştirilen bir ajanlı tarayıcıdan geliştirme notları — başarısız olan denemeler dâhil.',
  status: 'ready',

  hero: {
    eyebrow: 'Yapım günlüğü',
    headline: 'Yapım günlüğü.',
    subhead:
      'Açıkta bir ajanlı tarayıcı geliştirmenin notları — mimari kararlar, güvenlik çalışması ve işe yaramayan denemeler.',
  },

  sections: [
    {
      id: 'policy',
      eyebrow: 'Yayın ilkesi',
      heading: 'Burada ne yayımlanır, ne yayımlanmaz.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Çürütmeler yayımlanır.** Tasarlanmış bir yaklaşım test edilip başarısız olduğunda, o yazı yazılır. Bu projenin bir fazı, kendi teknik tanımının ölçülmüş bir çürütmesini kaydediyor; ölçü budur.',
            '**Belgesi olmayan duyuru yok.** Bir sonuç iddia eden yazı, o sonucu üreten şeye bağlantı verir.',
            '**Cila değil, süreklilik.** Birkaç haftada bir yazılan kısa ve dürüst bir not, üç ayda bir yazılan bir denemeyi döver.',
            '**Rakip aşağılanmaz.** Kategorideki yayımlanmış olayları teknik olarak ve keyif almadan çözümlemek meşrudur — bütün alan, bir ajanlı tarayıcının ne yapmaması gerektiğini böyle öğreniyor.',
          ],
        },
      ],
    },

    {
      id: 'published',
      eyebrow: 'Yayımlandı',
      heading: 'Şimdi çıktı.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Yanlış ekranı çeken ekran görüntüsü',
              body: 'Sekmeleri yalıtılmış `WebContentsView` olan bir tarayıcının kendi ekran görüntüsünü neden alamadığı, işletim sistemi düzeyindeki geçici çözümün operatörün kendi masaüstünü iki kez çekip neden silindiği ve işe yarayan `desktopCapturer` yolu. Gerçekte bittiği yerde bitiyor: yakalama çözüldü, ajan kaydı çözülmedi. [Okuyun](/blog/the-screenshot-that-captured-the-wrong-screen).',
            },
          ],
        },
      ],
    },

    {
      id: 'pipeline',
      eyebrow: 'Yolda',
      heading: 'Depoda zaten var olan işten çıkarıldı.',
      lede: 'Malzemesi hazır altı yazı — her birinin bir fragman değil, gerçek bir sonucu var. Yazıldıkça buraya iner.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Model neden güvenlik denetimi değildir.** Kategorinin herkese açık olaylarının ardındaki hata biçimi ve modelden _önce_ çalışan belirlenimci bir çekirdeğin bunda neyi değiştirdiği.',
            '**Kendi kum havuzu tasarımımızı test ettik ve başarısız oldu.** Bir faz, kod yürütme için yalıtılmış dünya yaklaşımını tanımlamıştı. Ucuz, çevrimdışı bir deney bunu çürüttü. Bunun neden sessizce etrafından dolanılmak yerine bir sonuç olarak kaydedildiği.',
            '**Kapalı arızalanan bir öldürme anahtarı ve bunu nasıl kanıtladık.** Yapılmış uygulamaya karşı canlı bir tünel uç noktasını öldürmek ve erişilebilir olduğu kanıtlanmış açık bir yolun hiçbir şey kaydetmediğini doğrulamak. Kapatamadığımız ve bunun yerine belgelediğimiz artık sızıntı dâhil.',
            '**Yerel bir veritabanını silmek.** `better-sqlite3` yerine Node’un dâhilî SQLite’ını koymak, bir yeniden derleme betiğini, üç CI adımını ve 63 testin koşuların tamamını izlemesine izin veren bir atlama korumasını ortadan kaldırdı.',
            '**Bir tarayıcı ajanının kendi başına asla yapmaması gerekenler.** Hassas bir kategoriyi açmak, bir cüzdan yetkisini genişletmek ve genel olarak izin genişletme — liste ve her birinin neden ajana değil kullanıcıya ait olduğu.',
            '**Herkesin şikâyetlerini okumak.** Beş rakip ajanlı tarayıcının yayımlanmış kullanıcı çalışmaları ne diyor, bunlar yüzünden neyi değiştirdik ve henüz yanıtlamadıklarımız.',
          ],
        },
      ],
    },

    {
      id: 'subscribe',
      eyebrow: 'Takip edin',
      heading: 'Henüz e-posta listesi yok.',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          body: [
            'Bir e-posta seçeneği bu siteyi bir veri sorumlusu yapar ve o alan var olmadan önce gizlilik politikasının kesinleşmesi gerekir. O zamana kadar: depoyu izleyin ya da uğrayın — temposu birkaç haftada bir nottur.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Ön sürüm bir projenin yaşadığının tek kanıtı.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Dürüst durum', href: '/roadmap', variant: 'outline' },
      { label: 'Depoyu izleyin', href: SITE.repo, variant: 'ghost', external: true },
    ],
  },
};
