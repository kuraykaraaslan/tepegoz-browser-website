import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/privacy.md (status: ready)
 * @sourceSha256 ad0492f9 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/privacy.ts`. Bu, *ürünün* mahremiyet sayfasıdır
 * — tarayıcının nasıl davrandığı. Sitenin kendi hukuki gizlilik politikası
 * `/legal/privacy` adresindeki ayrı bir belgedir; ikisi birbirine bağlanır,
 * birleştirilmez.
 */
export const privacy: PageContent = {
  route: '/privacy',
  title: 'Mahremiyet — Tepegöz',
  description:
    'Telemetri yok, bugün hesap yok, arka uç yok. Verinizin nerede durduğu, makinenizden ne çıktığı ve yerel önce bir tarayıcının söz veremeyecekleri.',
  status: 'ready',

  hero: {
    eyebrow: 'Mahremiyet',
    headline: 'Verileriniz bizde yok. Bir politika olarak değil — bir mimari olarak.',
    subhead:
      'Tepegöz hesabı yok, Tepegöz sunucusu yok ve bugün telemetri yok. Tarayıcı, başka bir yerde bizim bir şeyimiz çalıştığı için değil, sizin makinenizde çalıştığı için çalışıyor. İsteğe bağlı bir bulut katmanı planlanıyor — hiçbir zaman zorunlu olmayacak ve aşağıda ele alınıyor.',
  },

  sections: [
    {
      id: 'collect',
      eyebrow: 'Ne topluyoruz',
      heading: 'Hiçbir şey.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz’ün yönetilen bir arka ucu yok. Açılışta eve telefon etmez, kullanım bildirmez, bir kullanıcı kimliği tutmaz ve hiçbir şey yapmak için kayıt istemez. Devre dışı bırakılacak bir analitik hattı yok, çünkü hat yok.',
            'Bu, güvenmenizi umduğumuz bir ayar değil. Bir şey gönderilecek bir sunucu bileşeni yok.',
          ],
        },
      ],
    },

    {
      id: 'leaves',
      eyebrow: 'Dışarı çıkanlar',
      heading: 'Makinenizden gerçekten ne çıkıyor.',
      lede: 'Dürüstlük, sıfırdan daha kullanışlıdır. Üç şey çıkar; hepsi size aittir, hepsi görünürdür.',
      blocks: [
        {
          kind: 'cards',
          columns: 3,
          items: [
            {
              title: 'Yapay zekâ sağlayıcınız',
              body: 'Ajan çalıştığında, görev ve ihtiyaç duyduğu sayfa içeriği, anahtarını tanımladığınız sağlayıcıya gider — Anthropic, OpenAI, Google ya da Kimi. Bu, sizinle onlar arasında, onların koşullarıyla kurulmuş doğrudan bir ilişkidir; hiçbir şey üzerimizden geçmez ve biz bunu görmeyiz. Yerel bir model kullanın, bu bile durur: hiçbir şey çıkmaz.',
            },
            {
              title: 'Web',
              body: 'Ziyaret ettiğiniz sayfalar, her tarayıcıdaki gibi web’den getirilir.',
            },
            {
              title: 'Açıkça bağladığınız şeyler',
              body: 'Eklediğiniz MCP araç sunucuları ve indirmeyi seçtiğiniz sözlükler ya da model ağırlıkları — her biri sizin yaptığınız bir eylemdir, hiçbiri varsayılan olarak açık değildir.',
            },
          ],
        },
      ],
    },

    {
      id: 'where',
      eyebrow: 'Depolama',
      heading: 'Verileriniz nerede duruyor.',
      lede: 'Her şey makinenizdeki tek bir dizindedir: olay günlüğü, gezinme geçmişi, yer imleri, ajan koşu geçmişi, tercihler ve şifreli kasa.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**API anahtarları ve saklanan kimlik bilgileri**, işletim sisteminin kendi anahtar zinciriyle şifrelenir — Windows’ta DPAPI, macOS’ta Keychain — ve yalnızca ayrıcalıklı süreçte tutulur.',
            '**Günlükler günlükleyicinin kendisinde gizlenir**, böylece bir sır, bunu unutan bir çağrı yeri üzerinden bir günlük dosyasına ulaşamaz.',
            '**Profildeki hiçbir şey hiçbir yere eşitlenmez**, çünkü eşitlenecek bir yer yoktur.',
          ],
        },
        {
          kind: 'prose',
          body: [
            `Tam konumlar, dışa aktarabilecekleriniz ve bir yedeğin neleri kaçıracağı [veri ve yedekleme](${REPO_FILES.dataAndBackup}) belgesinde yazılıdır — eksikler dâhil.`,
          ],
        },
      ],
    },

    {
      id: 'network',
      eyebrow: 'Ağ',
      heading: 'Ağ mahremiyeti içine yapılmıştır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bir sekme, bir sekme grubu ya da profilin tamamı, kendi yapılandırmanızla bir **WireGuard tüneli ya da Tor** üzerinden yönlendirilebilir; VPN üzerinden Tor dâhil. Hiçbir şey paketlenmez, hiçbiri yönetici hakkı istemez ve biz çıkış düğümü işletmeyiz.',
            'Bir tünel düşerse ona bağlı sekmeler **durur**. Gerçek bağlantınıza sessiz bir dönüş yoktur — çoğu öldürme anahtarını süse çeviren arıza kipi tam olarak budur.',
          ],
        },
      ],
    },

    {
      id: 'agent',
      eyebrow: 'Ajan',
      heading: 'Ajan ve mahremiyetiniz.',
      lede: 'Sizin adınıza davranabilen bir ajan, sizin adınıza fazla paylaşabilir de. İlgili denetimler:',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Bir çıkış güvenlik duvarı**, dışarı giden içeriği sırlara karşı inceler ve çıkmaması gerekeni engeller.',
            '**Hassas kategoriler kapalı gelir** — bankacılık, kripto, sağlık, parola yöneticileri. Birini açmak sizin bilerek verdiğiniz, kategori bazlı bir karardır; ajanın bunu sizin yerinize verecek bir yolu yoktur.',
            '**Ekran görüntüleri varsayılan döngünün parçası değildir.** Görsel yakalama bilerek kapatılmıştır ve açılmadan önce, oturumu açık pencere çerçevesinin gizlenmesi ile koşu başına açık onay birer ön koşuldur, sonradan eklenecek işler değil.',
            '**Her eylem yerelde günlüklenir**, böylece ajanın ne gördüğünü ve ne yaptığını denetleyebilirsiniz — ve bu günlük makinenizden hiç çıkmaz.',
          ],
        },
      ],
    },

    {
      id: 'limits',
      eyebrow: 'Sınırlar',
      heading: 'Yerel önce bir tarayıcının söz veremeyecekleri.',
      lede: 'Yalnızca güçlü yanlarını sıralayan bir mahremiyet sayfası pazarlama gibi okunur; kendi sınırlarını adıyla söyleyen bir sayfa mühendislik gibi.',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            '**Yapay zekâ sağlayıcınız ona gönderdiğinizi görür.** Yerel önce olmak aradaki aracıyı kaldırır, sağlayıcıyı değil. İkisini birden yalnızca yerel bir model kaldırır.',
            '**Web siteleri sizi hâlâ parmak iziyle tanıyabilir.** Parmak izine direnç henüz yazılmadı. Bir tünel ağ adresinizi gizler; tarayıcınızı gizlemez. Bu iş, yayımlanmış bir öncesi-sonrası ölçümüyle gelene kadar, herhangi bir Chromium tarayıcısındaki kadar tanınabilir olduğunuzu varsayın.',
            '**`safeStorage`, diğer kullanıcılara ve diskinize çevrimdışı erişime karşı korur.** Zaten sizin haklarınızla çalışan bir kötücül yazılıma karşı korumaz.',
            '**Bağımsız bir mahremiyet ya da güvenlik denetimi yapılmadı.**',
          ],
        },
      ],
    },

    {
      id: 'cloud',
      eyebrow: 'Gelecek',
      heading: 'Bir bulut katmanı olduğunda.',
      lede: 'Bir gün yönetilen bir katman olabilir: anahtar tutmak istemeyenler için bir vekil ve cihazlar arasında isteğe bağlı, uçtan uca şifreli eşitleme. Üç taahhüt mimaride şimdiden sabittir.',
      blocks: [
        {
          kind: 'steps',
          items: [
            {
              title: 'İsteğe bağlıdır.',
              body: 'Tarayıcı bunu asla zorunlu kılmayacak ve onu satmak için yerel yol asla kötüleştirilmeyecek.',
            },
            {
              title: 'Eşitleme uçtan uca şifrelidir.',
              body: 'Sıfır bilgi, isteğe bağlı katılım.',
            },
            {
              title: 'Ham ekran görüntüleri asla eşitlenmez.',
              body: 'Ne varsayılan olarak, ne de bir ayar olarak.',
            },
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Mekanizma ve evrak işi.',
    body: [
      'Bu sayfa tarayıcının nasıl davrandığını anlatır. Okumakta olduğunuz web sitesinin kendine ait, ayrı bir gizlilik politikası vardır — kısadır, çünkü site de tarayıcının yaptığını yapar: hiçbir şey.',
    ],
    ctas: [
      { label: 'Güvenlik çekirdeği nasıl işliyor', href: '/security', variant: 'primary' },
      { label: 'Web sitesinin kendi gizlilik politikası', href: '/legal/privacy', variant: 'outline' },
    ],
  },
};
