import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/extensions.md (status: needs-assets)
 * @sourceSha256 ceceab4b (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/extensions.ts`.
 *
 * Çeviriye taşınan tek kural: aşağıdaki `gallery` bloğunun bekleyen metni bir
 * yapım talimatının Türkçesi değildir, sayfaya bakan kişiye yazılmış bir
 * cümledir. Talimat kodu yazana, metin okuyana seslenir; cümle ne kadar akıcı
 * olursa olsun ikisi birbirinin yerine geçmez. Gerekçenin tamamı İngilizce
 * dosyadadır.
 */
export const extensions: PageContent = {
  route: '/extensions',
  title: 'Uzantılar — Tepegöz',
  description:
    'Tepegöz ile dokuz birinci taraf uzantı gelir: reklam engelleme, makrolar, çeviri, yazma desteği, zamanlanmış görevler. Cıvatalanmadı, içine yapıldı.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Uzantılar',
    headline: 'Dokuz uzantı; bizim yazdığımız, tarayıcıyla birlikte gelen.',
    subhead:
      'Yaptığınız her şeyi okumak için izin isteyen, terk edilmiş yüklemelerle dolu bir mağaza değil. Ajanla aynı yetenek düzlemi üzerine kurulmuş ve aynı güvenlik çekirdeğiyle kapılanmış birinci taraf özellikler.',
    ctas: [
      { label: 'Özelliklerin tamamını görün', href: '/features', variant: 'primary' },
      { label: 'Yetenek düzlemi nasıl işliyor', href: '/security', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'why-first-party',
      eyebrow: 'Neden birinci taraf',
      heading: 'En çok ihtiyaç duyduğunuz özellikler, en çok erişime ihtiyaç duyanlardır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tarayıcı uzantısı modelinin mutsuz bir biçimi var: insanların en çok ihtiyaç duyduğu özellikler — reklam engelleme, bir işi otomatikleştirme, yazdıklarını düzeltme — en çok erişim isteyenlerdir ve bunlar en az hesap veren üçüncü taraflarca sunulur. Sonra bir platform kurallarını değiştirir ve reklam engelleyici sessizce zayıflatılır.',
            'Tepegöz bu özellikleri kendi yazar; depoda, her şeyle aynı incelemeden geçerek. Bir uzantının bir sayfada davranması gerektiğinde, ajanın geçtiği **aynı politika çekirdeğinden** geçer. Kimseye özel bir arka kapı verilmez.',
            '**Bunların her biri ajan tarafından da sürülebilir**, bildirilmiş bir yetenek sözleşmesi üzerinden — yani "bu sitede reklamları engelle" ya da "fatura makromu çalıştır" bir menü avı değil, bir cümledir.',
          ],
        },
      ],
    },

    {
      id: 'the-nine',
      eyebrow: 'Dokuzu',
      heading: 'Her biri etkin gelir, her biri kaldırılabilir.',
      blocks: [
        {
          kind: 'figure',
          asset: 'extensions',
          describes: 'b5a508fc',
          alt: 'Uzantılar sayfası: her biri etkin, adları ve açıklamalarıyla dokuz birinci taraf uzantı kartı.',
          caption: 'Dokuzu da birinci taraf, varsayılan olarak etkin — her biri ortak yetenek düzlemi üzerine kurulu.',
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Adblock Shield',
              body: 'Kozmetik süzmeyle birlikte reklam ve izleyici engelleme; oturum bölümü başına uygulanır — tünellenmiş bir sekmenin içi dâhil, aynı sırayla ve hiçbir yerde sistem genelinde bir vekil sunucu araya girmeden. Tepegöz bir Chrome uzantısı olmadığı için, başka yerlerde engelleyicilerin içini boşaltan platform kısıtlarına tabi değildir.',
            },
            {
              title: 'Agent',
              body: 'İşi tarayıcıya devrettiğiniz kenar çubuğu ve ajanı asıl süren yüzey: konuşma, plan, canlı adım akışı ve onay istemleri. Bu uzantı ayrıca komut paletini de getirir; paletin **Yap, Üret ve Görevler** kipleri hâlâ boştur — sekmeler yerinde, komutlar değil ve palete yazılan bir hedef bir koşu başlatmaz.',
            },
            {
              title: 'Macros',
              body: 'iMacros’un belirlenimci ardılı: yaptığınızı kaydedin, adımlar hâlinde düzenleyin, yeniden oynatın — **döngüde model olmadan**, yani aynı makro her seferinde aynı şeyi yapar. İki yüzey: canlı sayfanın yanında yeniden boyutlanabilir bir Makro Stüdyosu ve kaydettiğiniz her şey için bir yönetici. Ajan da makroları listeleyebilir, çalıştırabilir ve kaydedebilir.',
            },
            {
              title: 'Popup Blocker (katı)',
              body: 'Açılır pencereleri varsayılan olarak engeller ve onları sessizce yutmak yerine seçimi bildirimin içinde sunar: izin ver, arka planda aç, yönlendirmeyi izle ya da bu siteye güven.',
            },
            {
              title: 'Scheduled Tasks',
              body: 'Siz izlerken değil, bir zamana göre çalışan işler — aynı onay kurallarıyla: gözetimsiz bir koşu ancak sizin yazdığınız bir cüzdan yetkisinin içinde harcayabilir ve yine de kendi başına bir şey silemez.',
            },
            {
              title: 'Translate',
              body: 'Tam sayfa ve seçim çevirisi, yerel önce: önce çeviri belleği, sonra kuruluysa cihaz üstü bir model ve ancak ondan sonra onayladığınız bir bulut son çaresi. Sayfanın yeniden yazımı **geri alınabilir** — özgün düğümler saklanır ve geri konabilir; tek sayfalı uygulamaları bozan o yıkıcı değiştirme yapılmaz.',
            },
            {
              title: 'Typo',
              body: 'Herhangi bir sayfadaki düzenlenebilir metin için, yerelde çözümlenen yazım ve imla desteği. Sözlükler istendiğinde profilinize indirilir, sürümüne sabitlenir ve karma değeriyle doğrulanır — paketlenmez, yüklenmez ve "inceleme" için hiçbir yere gönderilmez.',
            },
            {
              title: 'User-Agent',
              body: 'Tarayıcının kendini nasıl tanıttığını değiştirin; Windows, macOS ve iPhone üzerinde Chrome, Edge, Firefox ve Safari için hazır ayarlarla — site bazlı ya da genel olarak.',
            },
            {
              title: 'Unified Player',
              body: 'Her sayfanın kendi getirdiğinin yerine, siteler arasında tek ve tutarlı bir video oynatıcı.',
            },
          ],
        },
        {
          kind: 'gallery',
          columns: 3,
          expected: 9,
          items: [],
          pendingLabel: 'Dokuz uzantı panelinin ekran görüntüleri',
          pendingNote:
            'Dokuzunun hiçbiri henüz görüntülenmedi. Her çekimin, o uzantı açıkken ve gerçekten bir şey yaparken çalışan bir yapıdan gelmesi gerekiyor; bu da bir öğleden sonra değil, dokuz ayrı oturum demek. Burada onların yerine hiçbir şey konmadı — ne bir simge, ne bir maket — yani yukarıdaki sayı var olanı gösterir ve her seferinde bir panel artar.',
        },
      ],
    },

    {
      id: 'third-party',
      eyebrow: 'Üçüncü taraf uzantılar',
      heading: 'Peki zaten kullandıklarınız?',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Sınırlı Chrome MV3 desteği planlanıyor; her şeyin çalıştığı sözü yerine **dürüst bir uyumluluk matrisiyle** — çünkü çalışmayacak ve bunu tek tek uzantı deneyerek öğrenmek kötü bir deneyimdir.',
            'Parola yöneticileri gibi gerçek erişim isteyen derin tümleşimler, uzantı yerine yerel bağdaştırıcılar olarak planlanıyor. Bir uzantı, kimlik bilgileriniz için yanlış bir güven sınırıdır.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Cıvatalanmış değil, içine yapılmış.',
    ctas: [
      { label: 'Özelliklerin tamamını görün', href: '/features', variant: 'primary' },
      { label: 'Güvenlik modeli nasıl işliyor', href: '/security', variant: 'outline' },
    ],
  },
};
