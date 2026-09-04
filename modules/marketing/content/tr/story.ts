import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/story.md (status: ready) @sourceSha256 0ebe7e04 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/story.ts` — İngilizce dosya hâlâ tek doğruluk
 * kaynağıdır ve oradaki gerekçe yorumları buraya kopyalanmaz: 21 dosyaya
 * kopyalanan bir yorum, 20'sinde bayatlayan bir yorumdur.
 */
export const story: PageContent = {
  route: '/story',
  title: 'Tepegöz adının hikâyesi',
  description:
    'Adını Dede Korkut Kitabı’nın tek gözlü devinden alır — tek bir ajan, sayfaya çevrilmiş tek bir odaklı bakış, körlemesine değil bilerek davranan.',
  status: 'ready',

  hero: {
    eyebrow: 'Hikâye',
    headline: 'Tepegöz’ün tek gözü vardı ve hiçbir şeyi kaçırmıyordu.',
    subhead:
      'Türkiye’de yapılan bir tarayıcı neden adını Dede Korkut Kitabı’ndaki bir canavardan taşıyor.',
  },

  sections: [
    {
      id: 'name',
      eyebrow: 'Ad',
      heading: 'Tepesinde gözü olan.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '_Tepegöz_ — kelimesi kelimesine "tepesinde göz" — Türk mitolojisinin tek gözlü devidir; en çok da Oğuz Türklerinin kurucu destan halkası olan **Dede Korkut Kitabı**’nın canavarı olarak bilinir. Küçük bir yaratık değildir. Koca bir halkın hesaplaşmak zorunda kaldığı düşmandır ve onunla nihayet yüzleşilmesinin hikâyesi, Türkçede günümüze ulaşmış en eski anlatılardan biridir.',
            'Bir tarayıcıya canavar adı vermek, ciddi bir yarısı olan bilinçli bir şakadır.',
          ],
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Ciddi yarısı göz',
              body: 'Tek göz: sabit, odaklı, önündeki şeyi eksiksiz gören. Ürün tam olarak budur — **tek bir ajan, sayfaya çevrilmiş tek bir yoğun bakış**; göremediği bir dünyayı tahmin etmek yerine gerçekten gözlemlediği şeye göre davranan.',
            },
            {
              title: 'Şaka yarısı canavar',
              body: 'Oturumunuz açık tarayıcınızı kullanan bir ajan gerçekten _bir canavardır_ — muazzam yetenekli ve denetimsiz bırakıldığında tehlikeli. Aksini varsaymak, bu kategorideki kazaların tam olarak nasıl olduğudur. Şeyi ne ise ona göre adlandırdık, sonra da önce kafesi yaptık.',
            },
          ],
        },
      ],
    },

    {
      id: 'why',
      eyebrow: 'Bunun var olma nedeni',
      heading: 'Her olayın altında aynı hata vardı.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '2025 ve 2026’da gelen yapay zekâ tarayıcılarının ortak bir biçimi vardı: Chromium’u al, bir sohbet paneli ekle, adına ajanlı de. Onlardan gerçek bir iş isteyin, iki şeyden biri olur. Genellikle iş son adımda size geri döner. Ara sıra ajan gerçekten davranır — ve ne yaptığını sonradan öğrenirsiniz, çünkü izlenecek bir şey ve durdurulacak bir yer yoktur.',
            'Bu arada güvenlik olayları herkesin gözü önünde birikti: bir web sayfasındaki gizli bir talimat gerçek bir eyleme dönüştü, bir ajan bir parola kasasını okumaya ikna edildi, tek bir mesaj birinin bulut depolamasındaki dosyaları sildi. Hepsinin altında aynı hata vardı — **modelin muhakemesini bir güvenlik denetimi yerine koymak**; oysa model, bir web sayfasının kendisiyle tartışabildiği bileşendir.',
            'Tepegöz tam tersi öncülden başlar. Kararı kurallar verir ve bu kararı modele danışılmadan önce verirler. Model, anlama ve belirsizlik için kullanılır; kendine izin vermek için asla. Ajanın yaptığı her şey yazılır. Geri alınamayan her şey durur ve sorar.',
            'Bu bir özellik listesi değildir. Projenin var olma nedenidir.',
          ],
        },
      ],
    },

    {
      id: 'refuses',
      eyebrow: 'Reddettikleri',
      heading: 'Yapmayı reddettiği üç şey.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Sizin adınıza hiçbir şeyin kilidini açmaz.** Size bir bedele mal olabilecek her yetenek — bankacılık, kripto, sağlık, parola yöneticileri, bir cüzdandan harcama — kapalı gelir. Ajan bunlardan birini açamaz, genişletemez ve tartışarak içine giremez. O kapıları yalnızca siz açarsınız.',
            '**Çalıştırmadığı bir kıyaslamayı iddia etmez.** Ajan yetkinliği programının her yeteneği yazıldı ve hiçbiri bağımsız olarak ölçülmedi. Bu, yol haritasında, README’de ve bu web sitesinde yazılıdır — çünkü alternatifi, kimsenin doğrulayamayacağı bir sayıdır ve bu kategorinin çoğunun bugün sunduğu tam olarak odur.',
            '**Türkçeyi bir yerelleştirme işi saymaz.** Burada Türkçe birinci sınıf bir dildir; kendine ait bir klavye hattı ve bir regresyon matrisi vardır — üstelik rakiplerin kendi kullanıcılarının İngilizce olmayan girdiyi engelleyici bir kusur olarak bildirdiği bir kategoride.',
          ],
        },
      ],
    },

    {
      id: 'going',
      eyebrow: 'Nereye gidiyor',
      heading: 'Plan herkese açık ve kendi eksikleri konusunda alışılmadık biçimde açık sözlü.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'On üç yapay zekâ yetkinlik fazı — kodu yazılmış, ölçümü borçlu —, gerçek tünellerle çalışan ağ mahremiyeti ve dürüstçe söylemek gerekirse yapılmamış uzun bir liste.',
            'Hiçbir faz bitmiş olarak işaretlenmedi; çünkü burada bir faz ancak bitmişlik tanımını geçtiğinde **ve** sonuç kayda geçtiğinde kapanır — bu ölçüye göre henüz hiçbiri kapanmadı.',
          ],
        },
        { kind: 'ctas', items: [{ label: 'Dürüst durum', href: '/roadmap', variant: 'outline' }] },
      ],
    },
  ],

  closing: {
    heading: 'Web’in üzerinde tek göz.',
    ctas: [
      { label: 'Nasıl çalıştığını görün', href: '/how-it-works', variant: 'primary' },
      { label: 'Kodu okuyun', href: SITE.repo, variant: 'outline', external: true },
    ],
  },
};
