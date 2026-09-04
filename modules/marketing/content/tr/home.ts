import type { PageContent } from '@/types/content';
import { SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/home.md (status: needs-assets) @sourceSha256 66bec140 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/home.ts`; oradaki uzun gerekçe yorumları —
 * kaydın neden 58 saniye olduğu, neden `motion` olduğu, boş varlık yuvasının
 * neden hâlâ orada durduğu — buraya kopyalanmaz. Bir karar iki dosyada
 * anlatılırsa birinde bayatlar.
 *
 * Kopyalanmayan ama geçerliliğini koruyan tek kural: `alt` metni çeviriyle
 * birlikte değişir, dolayısıyla `describes` damgası da değişir. Damgayı elle
 * yazmayın — `npm run media:restamp` dosyayı ve alt metnini yan yana gösterir.
 */
export const home: PageContent = {
  route: '/',
  title: 'Tepegöz — işi yapan tarayıcı',
  description:
    'Ajanlı, güvenlik önce, yerel önce bir tarayıcı. Planlar, gerçek sayfalarda davranır, her adımı gösterir. Anahtar sizin, makine sizin, kurallar sizin.',
  status: 'needs-assets',

  hero: {
    headline: 'İşi yapan tarayıcı.',
    subhead:
      'Tepegöz bir sayfayı anlar, adımları planlar ve bunları gerçek sekmelerde yürütür — her eylem görünür, geri alınabilir ve durdurma yetkisi sizde kalırken. Kendi yapay zekâ anahtarınız. Kendi makineniz. Hesap gerekmez.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Nasıl çalıştığını görün', href: '/how-it-works', variant: 'outline' },
    ],
    media: {
      kind: 'motion',
      asset: 'agent-run-narrated',
      describes: 'a94e1142',
      alt: 'Tepegöz’ün canlı web sitelerinde bir görevi yürütüşünü gösteren elli sekiz saniyelik bir ekran kaydı. Hedef, Ajan Konsolu’na yazılır: Electron uygulamalarının bellek kullanımıyla ilgili reddit başlığını bul ve başlığını bildir. Hiçbir şey çalışmadan önce, "Planı gözden geçir" başlıklı bir panel yedi adımı sıralar; her biri çağıracağı aracı ve gerekçesini belirtir, her birinin bir onay kutusu vardır. Tarayıcı DuckDuckGo’da arama yapar ve sonra durur: "Onay gerekli" başlıklı bir panel, ajanın durum değiştiren bir araç çalıştırmak istediğini söyler, risk sınıfını "Sayfa değişikliği" olarak verir, aracı browser_update_location olarak adlandırır ve eylemin değerlerinin ajanın okuduğu sayfa içeriğinden alındığı, dolayısıyla bunları bir sayfanın yerleştirmiş olabileceği konusunda uyarır — istem enjeksiyonunun bir okumayı bir eyleme tam olarak böyle çevirdiği konusunda. Gerekçe tainted_side_effect olarak etiketlenmiştir ve panel Reddet ile Onayla seçeneklerini sunar. Onaylandığında tarayıcı gerçek bir Reddit başlığını açar, bir engelleme ekranı yerine sayfanın gerçekten yüklendiğini denetler ve konsol başlığı bildirir: r/electronjs içinde "Is there a way to consistently keep my Electron app under 280MB memory?".',
      caption:
        'Tek çekim, canlı sitelerde, `ask` özerkliğinde — hiçbir yer hızlandırılmadı, hiçbir yer kesilmedi. Bir kez durur, çünkü açmak üzere olduğu adres görevi veren kişiden değil, okuduğu metinden gelmiştir. Kapıları bir insan değil, kayıt aracı yanıtladı. [Daha uzun bir koşu tam olarak yeniden oynatılıyor](/how-it-works#a-real-run) — farklı bir çekim; orada bir adım da başarısız olur ve toparlanır.',
      transcript: [
        'Gerçek bir koşunun tek çekimi, canlı web sitelerinde. Burada hiçbir şey kurgulanmadı.',
        'Görev Ajan Konsolu’na, gündelik dille giriliyor.',
        'Önce plan geliyor: çağırmayı düşündüğü her araç ve gerekçesi. Bir adımın işaretini kaldırın, o adım hiç çalışmaz.',
        'Arama yapıyor, başlığı buluyor ve açmadan önce duruyor.',
        'O adres, soran kişiden değil, ajanın okuduğu metinden geldi. Çekirdek buna kirlenmiş yan etki der ve böyle bir şeye sessizce davranmaz.',
        'Onaylandığında sayfayı açıyor, gerçekten neyin yüklendiğini denetliyor ve yanıtlıyor. Kendi anahtarınız, kendi makineniz, kendi kurallarınız.',
      ],
      poster: { asset: 'agent-run-poster', describes: '36215acf' },
    },
    statusNote: {
      body: '**Ön sürüm.** Yapılar imzalı ve indirilebilir durumda, ama bu erken bir yazılım: bağımsız bir güvenlik denetimi yapılmadı ve otomasyon bağımsız olarak kıyaslanmadı.',
      href: '/roadmap',
      linkLabel: 'Bu ne demek',
    },
  },

  sections: [
    {
      id: 'problem',
      eyebrow: 'Sorun',
      heading: '"Yapay zekâ tarayıcıları"nın çoğu Chromium’a bir sohbet paneli cıvatalıyor.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tıklamayı yine siz yaparsınız. Asistan zaten okumakta olduğunuz sayfayı özetler ve işi size geri verir. İçlerinden biri gerçekten davrandığında ise genellikle ne yaptığını göremez, adımın ortasında durduramaz ve bir şey çoktan gönderilmiş, satın alınmış ya da silinmişken işin yanlış gittiğini öğrenirsiniz.',
            'Tepegöz tam tersi kurulmuştur: tarayıcıyı baştan sona sürebilen bir **ajanlı çekirdek**, özerkliğin hiçbir zaman denetimi kaybetmek anlamına gelmemesi için bir **belirlenimci güvenlik çekirdeğinin** içinde.',
          ],
        },
      ],
    },

    {
      id: 'commitments',
      eyebrow: 'Üç taahhüt',
      heading: 'Ürünün hesabının sorulabileceği sözler.',
      lede: 'Her biri bir değer beyanı değil, kaynak kodda okuyabileceğiniz bir mekanizmadır.',
      blocks: [
        {
          kind: 'cards',
          columns: 3,
          items: [
            {
              title: 'Yerel önce',
              body: 'Deneyimin tamamı kendi makinenizde, kendi yapay zekâ anahtarınızla çalışır — Anthropic, OpenAI, Gemini, Kimi ya da tamamen çevrimdışı, kendi donanımınızda koşan bir model. **Bağımlı olunacak yönetilen bir arka uç yoktur** ve açılacak bir hesap da yoktur. İleride barındırılan bir katman olabilir; ama asla zorunlu olmayacak.',
            },
            {
              title: 'Tasarımdan gelen güvenlik',
              body: 'Web sayfaları ve görüntüleyici süreç güvenilmez sayılır. Kural tabanlı bir **politika çekirdeği her araç çağrısını model çalışmadan önce sınıflandırır**, bir çıkış güvenlik duvarı verinin gitmemesi gereken yerlere gitmesini engeller; bankacılık, kripto, sağlık ve parola yöneticisi siteleri kapalı gelir ve bunları yalnızca siz açabilirsiniz.',
            },
            {
              title: 'Gözlenebilir ve geri alınabilir',
              body: 'Her eylem, yalnızca ekleme yapılan bir olay günlüğüne düşer. Geri alınamayan adımlar — para, kimlik bilgileri, silme — önce durup size sorar ve karar, baktığınız pencerede değil ayrıcalıklı süreçte uygulanır. Ne olduğunu ve neden olduğunu her zaman görebilirsiniz.',
            },
          ],
        },
      ],
    },

    {
      id: 'demo',
      eyebrow: 'Gerçekte ne yapıyor',
      heading: 'İsteyin, planı gözden geçirin, çalışmasını izleyin.',
      blocks: [
        {
          kind: 'steps',
          items: [
            {
              title: 'Gündelik dille isteyin.',
              body: 'Araç çubuğundaki Ajan paneli olan **Ajan Konsolu**’nu açın ve hedefi alttaki kutuya Türkçe ya da İngilizce yazın.',
            },
            {
              title: 'Çalışmadan önce planı görün.',
              body: 'Adımlar sıralanır ve neye dokunduklarına göre etiketlenir: okuma, durum değiştiren, yıkıcı, finansal.',
            },
            {
              title: 'Çalışmasını izleyin.',
              body: 'Canlı konsol, bulunduğu sayfayı, yaptığı eylemi, gözlemlediğini ve maliyetini gösterir.',
            },
            {
              title: 'Direksiyon sizde kalsın.',
              body: 'Geri alınamayan her şey durur ve sorar. Herhangi bir adımda araya girebilirsiniz ve koşunun tamamı sonradan yeniden oynatılabilir.',
            },
          ],
        },
        {
          kind: 'assetPlaceholder',
          label: 'Bölümlenmiş bir kayıt: açılan bir onay kapısı ve bir hatadan toparlanma',
          note: 'Bu sayfanın başındaki kayıt gerçek bir koşudur, ama tam özerk bir koşudur — yani tasarım gereği hiçbir şeyin durup sormadığı kip. Hâlâ borçlu olunan şey, gerçek bir sitedeki bir görevin, yukarıdaki dört adıma göre bölümlenmiş daha uzun bir kaydıdır: çalışmadan önceki plan, karar için duran geri alınamaz bir adım ve bir şey bozulduktan sonra yoluna devam eden ajan. Temiz koşuyu kaydetmek daha kolay, göstermek ise daha az dürüsttür; bu yüzden zoru var olana kadar bu yuva burada kalır.',
        },
      ],
    },

    {
      id: 'browser',
      eyebrow: 'Önce bir tarayıcı',
      heading: 'Üzerine cıvatalanmış bir asistan değil.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz önce bir tarayıcıdır ve öyle davranır. Sekmeler ve sekme grupları, gerçek bir yöneticisi olan yer imleri, geçmiş, karantinalı bir indirme yöneticisi, sayfada bul, profiller, yerel bağlam menüleri. Adres çubuğu belirlenimcidir — ya gezinir ya arar ve **öyle demek istediğinizi sandığı için sessizce bir yapay zekâ sohbeti başlatmaz**.',
            'Birlikte dokuz birinci taraf uzantı gelir: reklam ve izleyici engelleme, makrolar, çeviri, yazma desteği, katı bir açılır pencere engelleyici, bir kullanıcı aracısı değiştirici, birleşik bir video oynatıcı, zamanlanmış görevler ve ajanın kendisi.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Özellikleri keşfedin', href: '/features', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'privacy',
      eyebrow: 'Mahremiyet',
      heading: 'Bir söz değil, bir mekanizma.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Telemetri kapalıdır. API anahtarlarınız işletim sisteminin kendi anahtar zinciriyle şifrelenir ve ayrıcalıklı süreçten hiç çıkmaz — ne bir günlüğe, ne bir pakete, ne de bir isteme. Ayrıca bir sekme ya da bütün bir sekme grubu **kendi WireGuard tüneli üzerinden ya da Tor üzerinden** yönlendirilebilir; VPN üzerinden Tor dâhil, kapalı-arıza ilkesiyle çalışan bir öldürme anahtarıyla: tünel düşerse o sekme, sessizce gerçek bağlantınıza dönmek yerine durur.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Mahremiyet nasıl işliyor', href: '/privacy', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'open-source',
      eyebrow: 'Açık kaynak',
      heading: 'Ve lisans bunu ciddi söylüyor.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz **AGPL-3.0** ile lisanslıdır. Tarayıcının tamamı — güvenlik çekirdeği, ajan çalışma zamanı, uzantılar — okunabilir, çatallanabilir ve denetlenebilir. Lisans bilerek güçlü seçildi: kimse bunu alıp kapatamaz ve aynı özgürlüğü geri vermeden bir hizmet olarak çalıştıramaz.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Kodu okuyun', href: SITE.repo, variant: 'outline', external: true },
            { label: 'AGPL sizin için ne demek', href: '/open-source', variant: 'ghost' },
          ],
        },
      ],
    },

    {
      id: 'honest',
      eyebrow: 'Burası dürüst olduğumuz yer',
      heading: 'Henüz kanıtlamadıklarımız.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Ajan yetkinliği programının her yeteneği yazıldı ve hiçbiri bağımsız olarak ölçülmedi — kıyaslama harcaması henüz yapılmadı ve yapılana kadar "bizim ajanımız daha iyi" bu projenin yazmayacağı bir cümledir. Bağımsız bir güvenlik denetimi yapılmadı. Birkaç yetenek bilerek kapalı gelir.',
            'Hepsi faz faz, neyin eksik olduğu ve nedeniyle birlikte yazılıdır.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Dürüst durumu görün', href: '/roadmap', variant: 'outline' },
            { label: 'Tepegöz nasıl karşılaştırılıyor', href: '/compare', variant: 'ghost' },
          ],
        },
      ],
    },

    {
      id: 'name',
      eyebrow: 'Ad',
      heading: 'Tek gözlü bir devin adını taşıyor.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '_Tepegöz_, Türk mitolojisinin tek gözlü devi, Dede Korkut Kitabı’nın canavarıdır. Asıl mesele o tek gözdür: **tek bir ajan, sayfaya çevrilmiş tek bir odaklı bakış**; körlemesine değil bilerek davranan.',
          ],
        },
        { kind: 'ctas', items: [{ label: 'Hikâyeyi okuyun', href: '/story', variant: 'outline' }] },
      ],
    },
  ],

  closing: {
    heading: 'Yapın, kırın, neyin kırıldığını söyleyin.',
    body: [
      'Tepegöz ön sürümdedir ve açıkta geliştirilir. Şu anda yapabileceğiniz en değerli şey onu çalıştırmak ve neyin bozulduğunu bildirmektir.',
    ],
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Güvenlik sorunu bildirin', href: '/security', variant: 'outline' },
    ],
  },
};
