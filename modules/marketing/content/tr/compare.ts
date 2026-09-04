import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/compare.md (status: ready)
 * @sourceSha256 ea823638 (2026-09-02)
 *
 * Türkçe çeviri. Kaynak `../en/compare.ts`. Sayfanın ikna ediciliğinden üstün
 * gelen kural burada da geçerlidir: önceden kaydedilmiş karşılaştırmalı ölçüm
 * belgesi var olana kadar hiçbir tamamlanma ya da başarı oranı karşılaştırması
 * yapılmaz. O zamana kadar sayfa performansı değil tasarımı karşılaştırır — ve
 * rakiplerin önde olduğu bölümü korur.
 */
export const compare: PageContent = {
  route: '/compare',
  title: 'Tepegöz nasıl karşılaştırılıyor',
  description:
    'Diğer ajanlı tarayıcılarla dürüst bir karşılaştırma — çalıştırmadığımız kıyaslama puanları üzerinden değil, mimari ve denetim üzerinden.',
  status: 'ready',

  hero: {
    eyebrow: 'Karşılaştırma',
    headline: 'Size çalıştırmadığımız bir kıyaslamayı göstermeyeceğiz.',
    subhead:
      'Her ajanlı tarayıcı, ajanının en iyisi olduğunu söylüyor. Neredeyse hiçbiri, yeniden üretebileceğiniz tarihli ve kör puanlanmış bir sonuç yayımlamıyor. Bu yüzden bu sayfa bugün doğrulanabilecek olanı karşılaştırıyor: her ürün bir ajanın neyi yapmasına izin veriyor ve kararı kim veriyor.',
  },

  sections: [
    {
      id: 'not-claim',
      eyebrow: 'İddia etmeyeceklerimiz',
      heading: 'Protokol yazıldı. Koşuların parası ödenmedi.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz, Perplexity Comet, ChatGPT Atlas, Fellou, Opera Neon ya da Claude for Chrome ile bağımsız olarak kıyaslanmadı. Bu karşılaştırmanın protokolü önceden yazıldı ve kayda geçirildi — görev listesi, değerlendirme ölçütü, kör puanlama ve iddiayı, yeniden üretilmeyi bıraktığı anda geri çeken madde. Yürütülmedi, çünkü ödenmemiş rakip abonelikleri ve API harcaması gerekiyor.',
            'Yürütüldüğünde, **Tepegöz kaybetse bile birinci sürüm yayımlanacak.**',
            'Bu sayfada okuduğunuz her şey, ya kaynak kodu okuyarak doğrulayabileceğiniz bir mimaridir ya da bakıp bulabileceğiniz, yayımlanmış bir olaydır.',
          ],
        },
      ],
    },

    {
      id: 'design',
      eyebrow: 'Tasarım farkları',
      heading: 'Teknik bir alıcının gerçekten sorduğu sorular.',
      blocks: [
        {
          kind: 'table',
          caption: 'Tepegöz ile ajanlı tarayıcı kategorisi arasındaki tasarım ve denetim farkları',
          head: ['Soru', 'Tepegöz', 'Kategoride yaygın olan'],
          rows: [
            [
              'Ajanın neye izinli olduğuna kim karar veriyor?',
              'Belirlenimci bir kural çekirdeği, ayrıcalıklı süreçte, model çalışmadan **önce**',
              'Uslu durması istenen model ve eylem başına bir onay kutusu',
            ],
            [
              'Özerklik ayarı nerede uygulanıyor?',
              'Ana süreçte; gördüğünüz pencerenin oy hakkı yok',
              'Sıklıkla arayüz katmanında',
            ],
            [
              'Sayfa içeriği hiç talimat sayılıyor mu?',
              'Hayır — girdiği sınırda taranır ve veri olarak işaretlenir',
              'Kategorinin yayımlanmış olaylarının ardındaki hata sınıfı',
            ],
            [
              'Ajan kendi izinlerini genişletebiliyor mu?',
              'Hayır. İzinler sizin onayladığınız bir plandan gelir ve koşuyla sona erer',
              'Değişir; çoğu zaman genel bir "onayları atla" kipi vardır',
            ],
            [
              'Hassas siteler',
              'Bankacılık, kripto, sağlık ve parola yöneticileri kapalı gelir; yalnızca siz açabilirsiniz',
              'Genellikle her şeyle aynı izin',
            ],
            [
              'API anahtarlarınız nerede duruyor?',
              'İşletim sisteminizin anahtar zincirinde, yalnızca ayrıcalıklı süreçte. Hesap yok, vekil sunucu yok',
              'Çoğu zaman barındırılan bir vekil sunucusu olan bir satıcı hesabı',
            ],
            [
              'Hiçbir arka uç olmadan çalışıyor mu?',
              'Evet — tamamen yerel bir model dâhil',
              'Nadiren; genelde ürünün kendisi bir satıcı aboneliğidir',
            ],
            ['Sekme bazlı VPN ya da Tor', 'Evet, kapalı-arıza öldürme anahtarıyla', 'Sunulmuyor'],
            ['Kaynağı okuyabiliyor musunuz?', 'Tamamını, AGPL-3.0', 'Çoğunlukla kapalı'],
            [
              'Otomasyon bağımsız olarak kıyaslandı mı?',
              '**Hayır — ve bunu söylüyoruz**',
              'İddia ediliyor, nadiren yeniden üretilebilir bir belgeyle',
            ],
          ],
        },
      ],
    },

    {
      id: 'category-wrong',
      eyebrow: 'Kategorinin şimdiden yanlış yaptıkları',
      heading: 'Bu kısım görüş değil, kamuya açık kayıt.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Piyasadaki ajanlı tarayıcılara dair bağımsız raporlar ve açıklamalar şunları anlatıyor: sayfa içeriğini gerçek eylemlere çeviren dolaylı istem enjeksiyonu; bir parola yöneticisinin kasasını okumaya yönlendirilen bir ajan; bağlı bulut depolamadaki dosyaları silen sıfır tıklamalı bir talimat; oturumu açık ekranları yakalayan görüntüler; ve kullanıcıların üstünden tıklamayı öğrendiği kadar birbirinin aynı onay istemleri.',
            'Tepegöz’ün yanıtı bağışık olduğu değildir. Yanıtı, bunların her birinin, tarayıcının kalmak zorunda olduğu düşmanca bir teste çevrildiğidir — çünkü kendisi olmadan başarısız olan bir senaryosu bulunmayan bir savunma, bir denetim değil bir varsayımdır. İş, kalem kalem herkese açık izleniyor.',
            `Kaynak çalışmalar ve her bulgunun planda nereye düştüğü: [araştırma dizini](${REPO_FILES.research}).`,
          ],
        },
      ],
    },

    {
      id: 'rivals-ahead',
      eyebrow: 'Rakiplerin önde olduğu yerler',
      heading: 'Hiç kayıp içermeyen bir karşılaştırma sayfası bir reklamdır.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Onlar dağıtıyor.** İmzalı kurulum dosyaları, güncelleme kanalları, mobil uygulamalar. Tepegöz’ün bunların hiçbiri henüz yok.',
            'Ön sürüm bir projenin iddia edemeyeceği bir ölçekte **sahada kanıtlandılar**.',
            '**Uzantı ekosistemleri.** Buradaki Chrome MV3 desteği sınırlı ve planlı; bugün belirli bir uzantıya bağımlıysanız, bu olduğunuz yerde kalmak için gerçek bir nedendir.',
            '**Cila ve platform genişliği.** macOS ve Linux çalışıyor ama daha az test ediliyor; odak Windows’ta.',
            '**Ajanları, önemsediğiniz görevde düpedüz daha iyi olabilir.** Bunu kimse ölçmedi, biz de dâhil.',
          ],
        },
      ],
    },

    {
      id: 'who-should',
      eyebrow: 'Tepegöz’ü kim kullanmalı',
      heading: 'Uyum konusunda dürüstçe.',
      blocks: [
        {
          kind: 'callout',
          tone: 'success',
          title: 'Şu durumda iyi bir seçim',
          body: [
            'Denetleyebileceğiniz bir otomasyon istiyorsanız; bir asistan kiralamaktansa kendi anahtarınızı getirmeyi tercih ediyorsanız; sekme bazlı ağ yalıtımına ihtiyacınız varsa; Türkçe çalışıyor ve bunun sonradan akla gelen bir şey olmasından bıktıysanız; ya da bir tarayıcıyı kurmadan önce kaynağını okuyan türden biriyseniz.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Şu durumda kötü bir seçim',
          body: [
            'Bugün kararlı bir şeye ihtiyacınız varsa, imzalı bir kurulum dosyası ve otomatik güncelleme istiyorsanız, Chrome uzantılarına bağımlıysanız ya da mobil bir tarayıcı istiyorsanız. Sonra uğrayın — yol haritası, "sonra"nın ne zaman olabileceğini dürüstçe söylüyor.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Tasarımı kendiniz görün.',
    ctas: [
      { label: 'Nasıl çalışır', href: '/how-it-works', variant: 'primary' },
      { label: 'Dürüst durum', href: '/roadmap', variant: 'outline' },
    ],
  },
};
