import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/features.md (status: ready)
 * @sourceSha256 fc6a64bb (2026-09-02)
 *
 * Türkçe çeviri. Kaynak `../en/features.ts`. Oradaki iki kural burada da
 * taşıyıcıdır ve çeviri sırasında bozulmaması gerekir:
 *
 *   1. Mevcut olan ile planlanan asla birleşmez. "Tek ve ayrıştırılmamış bir
 *      liste, ürün sitelerinin yalan söylemeden yalan söylemesinin en yaygın
 *      yoludur."
 *   2. `star: true`, kategorinin sunmadığı ya da tam tersini yaptığı bir
 *      mekanizmayı işaretler — asla bir performans iddiasını değil.
 *
 * Gerekçelerin tamamı İngilizce dosyadadır; buraya kopyalanmaz.
 */
export const features: PageContent = {
  route: '/features',
  title: 'Özellikler — Tepegöz',
  description:
    'Tepegöz’ün bugün sunduğu her şey — tarayıcı, ajan, güvenlik çekirdeği, ağ mahremiyeti, uzantılar — hâlâ planlanan olandan dürüstçe ayrılmış hâlde.',
  status: 'ready',

  hero: {
    eyebrow: 'Özellikler',
    headline: 'Gerçek bir tarayıcı ve onu sürebilen bir ajan.',
    subhead:
      'Aşağıdaki her şey, bugün çalışan ile planlanan olarak ikiye ayrılmıştır. Hiçbir şey iki kez yazılmadı ve planlanan hiçbir şey varmış gibi yazılmadı.',
  },

  sections: [
    {
      id: 'legend',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: '★, kategorinin sunmadığı ya da tam tersini yaptığı bir mekanizmayı işaretler.',
          body: [
            'Her biri kaynak kod okunarak doğrulanabilir — hiçbiri bir performans iddiası değildir. Ajanın görevleri alternatiflere kıyasla ne kadar iyi tamamladığı hâlâ ölçülmemiştir ve bu, [yol haritasındadır](/roadmap).',
          ],
        },
      ],
    },

    {
      id: 'browser',
      eyebrow: 'Tarayıcı',
      heading: 'Bir tarayıcıdan zaten beklediğiniz her şey.',
      blocks: [
        {
          kind: 'figure',
          asset: 'browser-chrome',
          describes: '574cd0e2',
          alt: 'Tepegöz penceresi: sekme şeridi, adres çubuğu, yer imleri çubuğu ve arama alanı olan yeni sekme sayfası.',
          caption: 'Sekmeler, belirlenimci bir adres çubuğu ve bir yer imleri çubuğu — her sekme yalıtılmış bir görünüm.',
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**Sekmeler ve sekme grupları**: sürükleyerek sıralama, kaydırınca daralma ve grup bazlı ayarlar — her sekme yalıtılmış bir görünümdür, yani bir sayfa bir başkasının içine uzanamaz',
                {
                  star: true,
                  text: '**Belirlenimci adres çubuğu**: satır içi aritmetik ve önek komutları (`tab:`, `history:`, `bookmark:`) — ya gezinir ya arar ve kazayla bir yapay zekâ konuşması başlatmaz',
                },
                '**Yer imleri** — klasör açılır menüleri olan Chrome tarzı bir yer imleri çubuğu ve sürükle-bırak, arama ve klasörler sunan iki bölmeli bir yönetici',
                '**Geçmiş**: aramalı, ayrıca her sekme için geri/ileri açılır listeleri',
                {
                  star: true,
                  text: '**İndirme yöneticisi**: duraklat ve sürdür, risk sınıflandırması, **dosyaya güvenilmeden önce karantina** ve her aktarım için gizlenmiş alanlarla tutulan bir denetim kaydı',
                },
                {
                  star: true,
                  text: '**Yükleme etkinliği** — makinenizden neyin çıktığının, gizlenmiş alanlarla sunulan bir görünümü ve iptal imkânı. Tarayıcıların çoğunda böyle bir yüzey hiç yoktur',
                },
                '**Sayfada bul**, yalıtılmış depolamaya sahip **profiller**, **yerel bağlam menüleri**, site bazlı yakınlaştırma',
                '**Tek bir klavye kısayolu kaydı** — her kısayol tek bir yerde tanımlanır, böylece aynı tuş iki pencerede iki şey anlamına gelemez',
                '**Tepsi ve sekmeleri gizle kipleri**: ekranınızı işgal etmeden çalışmaya devam etmesi gereken işler için',
                '**Dâhilî sayfalar**: ayarlar, indirmeler, yüklemeler, yer imleri, geçmiş, uzantılar ve görevler için',
              ],
            },
            {
              state: 'planned',
              items: [
                'Okuyucu kipi, yazdırma önizlemesi ve dâhilî PDF görüntüleme',
                'Bölünmüş görünüm ve çalışma alanları',
                'Dikey sekmeler',
                'Chrome MV3 uzantı desteği — toptan bir söz yerine dürüst bir uyumluluk matrisiyle',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'agent',
      eyebrow: 'Ajan',
      heading: 'İşi yapan kısım.',
      blocks: [
        {
          kind: 'figure',
          asset: 'command-palette',
          describes: '58fd622d',
          // Sekme adları ekranda İngilizce yazdığı için İngilizce bırakıldı:
          // alt metni, resmin ne anlattığını değil ne gösterdiğini söyler. Bu
          // çekim İngilizce bir yapıdan alındı; Türkçe bir yapıda etiketler de
          // Türkçe olurdu, ama bu resimde öyle yazmıyor.
          alt: 'Bir sayfanın üzerinde açık komut paleti: Chat, Do, Make ve Tasks sekmeleri ile bir komut girişi.',
          caption: 'Tarayıcı çerçevesinden `Ctrl+K` — sayfanın üzerindeki palet ve dört kip sekmesi.',
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**Komut paleti** (`Ctrl+K`) — sayfanın üzerinde açılır, adres çubuğuyla aynı Türkçe duyarlı katlamayla siz yazdıkça süzer ve tarayıcı komutlarını çalıştırır: yeni sekme, kapatılan sekmeyi geri aç, yenile, ayarlar',
                '**Canlı ajan konsolu** — sayfa, eylem, gözlem, ilerleme, jeton maliyeti ve hatalar; olurken',
                '**Düzenlenebilir planlar**: her adım okuma / durum değiştiren / yıkıcı / finansal olarak etiketli',
                {
                  star: true,
                  text: '**Risk katmanlı onaylar** — araç yazarının bildirdiği bir etiketten değil; araçtan, **doğrulanmış argümanlarından** ve hedefinden türetilen altı katman',
                },
                {
                  star: true,
                  text: '**Plan kapsamlı izinler**: koşuyla birlikte sona erer ve ajan tarafından genişletilemez',
                },
                {
                  star: true,
                  text: '**Yapısal sayfa algısı** — önce DOM ve erişilebilirlik ağacı, görüntü yalnızca son çare; açık gölge köklerini ve aynı kaynaklı çerçeveleri deler geçer',
                },
                {
                  star: true,
                  text: '**İstem enjeksiyonu taraması**: gizli, sıfır genişlikli, çift yönlü yazım ve benzer-görünümlü karakter vektörlerini sayfa metninden model görmeden önce ayıklar',
                },
                {
                  star: true,
                  text: '**İnsan benzeri girdi** — anlık düz çizgi sıçramaları yerine yumuşatılmış hızda eğimli fare yolları, dağıtılmış tıklama ve tuş zamanlamaları ve üç aşamalı, hedefi biraz aşan kaydırma',
                },
                '**Döngü saptama** ve bayat referanstan toparlanma',
                '**CAPTCHA ve iki aşamalı doğrulamada insana devir** — saptanır ve size verilir',
                '**Aranabilir koşu geçmişi** — geçmiş her konuşma ve görev',
                {
                  star: true,
                  text: '**Makrolar** — kum havuzuna alınmış bir ifade diline sahip, belirlenimci ve **modelsiz** bir otomasyon yorumlayıcısı; her öğe adımı sabit bir süre uyumak yerine **kendiliğinden bekler**. Ajan da bunları sürebilir',
                },
                '**Zamanlanmış görevler**',
                {
                  star: true,
                  text: '**Mühürlü gözetimsiz koşular** — zamanlanmış bir koşu, ancak siz izlerken onayladığınız şeyin daraltılmış hâli olabilir ve `yıkıcı` / `finansal` adımlar asla kendiliğinden çalışmaz',
                },
                {
                  star: true,
                  text: '**MCP istemcisi** — dış araç sunucuları dâhilî olanlarla birebir aynı muameleyi görür: aynı çekirdek, aynı onaylar, aynı denetim kaydı ve her yanıt güvenilmek yerine yeniden doğrulanır',
                },
                {
                  star: true,
                  text: '**Cihaz üstü çıkarım** ile tamamen çevrimdışı çalışma; küçük bir yerel modelin JSON’unu düzyazıyla sarmasını fiziksel olarak imkânsız kılan bir dilbilgisiyle',
                },
                {
                  star: true,
                  text: '**Tavansız ve süresiz bir model çağrısı mümkün değildir** — bir jeton tavanı ve bir zaman aşımı, istek herhangi bir sağlayıcıya ulaşmadan önce uygulanır',
                },
                {
                  star: true,
                  text: '**Yapısı gereği sağlayıcıdan bağımsız** — Anthropic, OpenAI, Gemini, Kimi ve yerel modeller tek bir kurallı biçime normalleştirilir, böylece ağ geçidinin üstündeki hiçbir şey bir satıcıya göre yazılmaz',
                },
              ],
            },
            {
              state: 'in-progress',
              items: [
                'Paletin **Yap, Üret ve Görevler kipleri**. Dört sekmenin hepsi yerinde ve `Tab` aralarında geçiyor, ama bugün yalnızca ilki komut taşıyor — diğer üçü gizlenmek yerine bilerek boş gösteriliyor ve palete bir hedef yazmak bir ajan koşusu başlatmıyor. Ajanı süren şey ajan konsoludur',
                '**Bir sayfa odaktayken** `Ctrl+K` — kısayol tarayıcı çerçevesine bağlanır, yani paleti çerçeveden açar, bir sayfanın içinden değil',
              ],
            },
            {
              state: 'planned',
              items: [
                '**Otomatik CAPTCHA ve iki aşamalı doğrulama geçişi**, insana devir son çare olarak korunarak',
                'Bağımlılık farkındalıklı bir zamanlayıcıyla paralel çok sekmeli yürütme',
                'Kalıcı kontrol noktası ve sürdürme; ayrıca bitmemiş bir görevi başka bir ajana ya da modele devretme',
                'Melez erişimli uzun vadeli görev belleği',
                'Bir **MCP sunucusu** yüzeyi, böylece başka istemciler Tepegöz’ün araçlarını sürebilsin',
                'Tarayıcı otomasyonu yerine resmî API’leri tercih eden tümleşim bağdaştırıcıları (Google Workspace, Canva)',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'security',
      eyebrow: 'Güvenlik',
      heading: 'Ajanın içinde koştuğu sınırlar.',
      blocks: [
        {
          kind: 'figure',
          asset: 'providers',
          describes: '7e2ed666',
          alt: 'Ayarlar, Sağlayıcılar ve API anahtarları: bir sağlayıcı açılır listesi, bir etiket alanı ve bir API anahtarı alanı; anahtarların cihazda şifrelendiğini belirten bir notla.',
          // Alıntı ekranda yazdığı gibi bırakıldı; ardından çevirisi verildi.
          // Ekranda olmayan bir cümleyi tırnak içinde göstermek, resmin
          // söylemediği bir şeyi söylettirmektir.
          caption: 'Kendi anahtarınız, kendi makineniz: "Keys are encrypted on this device (OS keychain) and never leave it without your action" — anahtarlar bu cihazda, işletim sisteminin anahtar zinciriyle şifrelenir ve siz bir şey yapmadan cihazdan çıkmaz.',
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                {
                  star: true,
                  text: '**Belirlenimci politika çekirdeği**, her araç çağrısını **model çalışmadan önce** sınıflandırır — model korkulukları değil, düpedüz kod olarak güvenlik',
                },
                {
                  star: true,
                  text: '**Her araç için tek bir ağ geçidi** — dâhilî, MCP ve uzantı yetenekleri aynı sabit sıradan geçer, böylece bir aracın kaynağı asla politikanın atlatılma yolu olamaz',
                },
                {
                  star: true,
                  text: '**Ayrıcalıklı süreçte uygulanan özerklik** — görüntüleyici süreç gösterir ve iletir, asla karar vermez',
                },
                {
                  star: true,
                  text: '**Çıkış güvenlik duvarı**: dışarı giden içerikte sır ve yüksek entropi saptamasıyla',
                },
                {
                  star: true,
                  text: '**Kimlik bilgisi aracısı ve şifreli kasa** — sırlar model onları hiç görmeden doldurulur ve ham parolalar süreçler arası iletişime asla açılmaz',
                },
                {
                  star: true,
                  text: '**Kirlilik takibi** — web kaynaklı veri sınırda işaretlenir ve kirli artı durum değiştiren bir çağrı onayı zorunlu kılar',
                },
                '**Hassas site kategori haritası**: bankacılık, kripto, sağlık, parola yöneticileri, Türk bankacılığı ve bütün `gov.tr` ağacını kapsar',
                {
                  star: true,
                  text: 'Ajanın yaptığı her şeyin **yalnızca ekleme yapılan olay günlüğü**',
                },
                '**Yıkıcı ve finansal adımlar için insan onayı**, karar yolunda uygulanır',
                {
                  star: true,
                  text: '**Klasör kum havuzuna alınmış dosya erişimi** — verdiğiniz klasör izinleri listesi yetkilendirmenin *kendisidir*; daha geniş bir dosya sistemi erişimi yoktur',
                },
                '**Kapsamlı güven profilleri** — korumayı genel olarak kapatmadan neyin nerede serbest olduğunu daraltın',
                {
                  star: true,
                  text: '**Sertleştirilmiş Electron kabuğu** — tek bir güvenli pencere üreteci, bağlam yalıtımı, kum havuzu, kapatılmış ve paketlenmiş yapıda doğrulanmış sigortalar',
                },
                {
                  star: true,
                  text: '**Sırlar günlükleyicinin kendisinde gizlenir**, böylece bunu unutan bir çağrı yeri bir sırrı günlük dosyasına koyamaz',
                },
                {
                  star: true,
                  text: '**Ajan çıktısı asla HTML olarak işlenmez** — markdown React öğelerine dönüşür, asla ham imlemeye değil',
                },
                {
                  star: true,
                  text: '**`tepegoz-verify`** — bir koşu kanıtı paketini veritabanı, ağ çağrısı ya da üretenine güvenmek olmadan doğrulayan bağımsız bir komut satırı aracı',
                },
                'Pano içeriği kalıcı durumun, günlüklerin ve günlük yüklerinin dışında tutulur',
              ],
            },
            {
              state: 'planned',
              items: [
                '**Kategori bazlı kullanıcı izinleri**: bankacılık, kripto, sağlık ya da parola yöneticisi otomasyonunu bilerek açmanızı sağlar — varsayılan kapalı ve asla ajan tarafından açılmaz',
                '**Cüzdan yetkileri** — harcamayı sınırlar içinde yetkilendiren bir tavan, bir alıcı listesi ve bir son kullanma tarihi',
                'Parmak izine karşı direnç, öncesi ve sonrası entropi ölçümü yayımlanarak',
                'Google Safe Browsing ve cihaz üstü bir kimlik avı ve dolandırıcılık sınıflandırıcısı',
                'Üçüncü taraf çerez yalıtımı',
                'Doğrulanabilir politika paketleri, işlem yetkileri ve yönetişimli ajan uç noktaları',
              ],
            },
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Güvenlik modeli nasıl işliyor', href: '/security', variant: 'outline' },
            { label: 'Tepegöz nasıl karşılaştırılıyor', href: '/compare', variant: 'ghost' },
          ],
        },
      ],
    },

    {
      id: 'network',
      eyebrow: 'Ağ mahremiyeti',
      heading: 'Kapalı-arıza ilkesiyle çalışan sekme bazlı tüneller.',
      blocks: [
        {
          kind: 'figure',
          asset: 'network-privacy',
          describes: 'c266ac60',
          alt: 'Ayarlar, Ağ mahremiyeti: WireGuard, Tor ya da SOCKS5 sunan bir bağlantı formu, bir varsayılan rota seçici ve Tepegöz’ün tünel ikili dosyalarını dağıtmadığını belirten notlar.',
          caption: 'WireGuard, Tor ya da zaten kendi çalıştırdığınız bir SOCKS5 uç noktası — ve ikisinin de ikili dosyasını dağıtmadığını açıkça söyler.',
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                {
                  star: true,
                  text: '**Sekme ve grup bazlı tüneller** — tek bir sekmeyi, bütün bir sekme grubunu ya da profilin tamamını bağlayın. Kategoride başka hiçbir yerde sunulmuyor',
                },
                '**WireGuard** (kullanıcı alanında, yükseltme gerektirmez, hiçbir şey paketlenmez) ve **Tor**',
                '**VPN üzerinden Tor**, zincirlenmiş hâlde',
                {
                  star: true,
                  text: '**Kapalı-arıza öldürme anahtarı** — tünel düşerse bağlı sekmeler durur; gerçek bağlantınıza sessiz bir dönüş yoktur',
                },
                '**Sekme ve gruplarda rota rozetleri**, ayrıcalıklı süreçte hesaplanır, asla yalnızca renkle anlatılmaz',
                '**DNS tünelin içinden**, bir sızıntı testiyle doğrulanmış',
              ],
            },
            {
              state: 'planned',
              items: ['OpenVPN', 'Yönetilen çıkış düğümleri — ancak ve ancak talep olursa'],
            },
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Sekme bazlı VPN ve Tor, derinlemesine', href: '/network-privacy', variant: 'outline' },
          ],
        },
      ],
    },

    {
      id: 'extensions',
      eyebrow: 'Uzantılar',
      heading: 'Tarayıcıyla birlikte dokuz birinci taraf uzantı gelir.',
      blocks: [
        {
          kind: 'figure',
          asset: 'extensions',
          describes: 'b5a508fc',
          alt: 'Uzantılar sayfası: her biri etkin, adları ve açıklamalarıyla dokuz birinci taraf uzantı kartı.',
          caption: 'Dokuzu da birinci taraf, varsayılan olarak etkin — ve her biri kaldırılabilir.',
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              label: 'Birlikte gelenler',
              items: [
                {
                  star: true,
                  text: '**Translate** — yerel önce: önce çeviri belleği, sonra cihaz üstü bir model, sonra sizin onayladığınız bir bulut son çaresi. Sayfanın yeniden yazımı **geri alınabilir**; özgün düğümler yok edilmez, saklanır',
                },
                {
                  star: true,
                  text: '**Typo** — yazım ve imla desteği; sözlükler uygulamanın içine paketlenmek yerine profilinize indirilir',
                },
                {
                  star: true,
                  text: '**Popup Blocker (katı)** — bir açılır pencereyi sessizce yutmak yerine seçimi bildirimin içinde sunar: izin ver, arka planda aç, yönlendirmeyi izle ya da siteye güven',
                },
                {
                  star: true,
                  text: '**Agent** — her sekme grubunun kendi bağımsız ajan oturumu olur ve etkin sekmeyle birlikte değişir',
                },
                {
                  star: true,
                  text: '**Macros** — sayfanın yanında bir kaydet/düzenle/yeniden oynat stüdyosu ve kayıtlı otomasyonlar için bir yönetici',
                },
                '**Adblock Shield** — tek bir ağ süzme hattı üzerinden reklam ve izleyici engelleme',
                '**User-Agent** — Chrome/Edge/Firefox/Safari ve masaüstü/mobil hazır ayarları ya da özel bir dizge',
                '**Scheduled Tasks** — bir zamana göre çalışan işlerin yüzeyi',
                '**Unified Player** — her sitenin kendi oynatıcısı yerine tek ve tutarlı bir video yüzeyi',
              ],
            },
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Dokuzu, tek tek', href: '/extensions', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'language',
      eyebrow: 'Dil ve erişim',
      heading: 'İngilizce ve Türkçe, eşit düzeyde.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              items: [
                '**İngilizce ve Türkçe tam eşitlikte**, yeniden başlatmadan çalışırken değiştirilebilir',
                {
                  star: true,
                  text: '**Kendine ait bir Türkçe klavye hattı** — Q ve F düzenleri, ölü tuşlar, `ç ğ ı ö ş ü` — arayüz dilinden bağımsız bir regresyon matrisiyle',
                },
                {
                  star: true,
                  text: '**Sabit kodlanmış metin yapıyı kırar** — kullanıcıya görünen her dizge türlenmiş bir katalogdan gelir',
                },
              ],
            },
            {
              state: 'in-progress',
              items: [
                'WCAG 2.2 AA sürekli bir gerekliliktir ve her yüzey geldikçe o yüzey için doğrulanır',
                'Yüksek yoğunluklu ekranlar için uygulama içi arayüz ölçekleme',
              ],
            },
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Birinci dil olarak Türkçe', href: '/turkey', variant: 'outline' },
          ],
        },
      ],
    },

    {
      id: 'under-the-hood',
      eyebrow: 'Kaputun altında',
      heading: 'Neyin üstüne kurulu.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Electron 43**, görüntüleyici süreç güvenilmez sayılarak',
            '**React ve katı TypeScript** — kaçış kapağı yok: kod tabanında sıfır `@ts-ignore` var',
            {
              star: true,
              text: 'Gerçek sayfaları gerçek-sonuç puanlamasıyla süren **bir değerlendirme düzeneği** — yalnızca geliştirmede kullanılır ve uygulamayla asla dağıtılmaz, çünkü ürünün parçası olmak için değil ürünü ölçmek için vardır',
            },
            {
              star: true,
              text: '**Katmanlar arası her sözleşme için tek bir doğruluk kaynağı**; her güven sınırı biçimi yeniden bildirmek yerine ona karşı doğrular',
            },
            {
              star: true,
              text: '**Kum havuzuna alınmış ön yükleyicinin bağımlılıksız olduğu doğrulanır**, böylece köprü yüklemesine izin verilmeyen bir modülü içeri çekemez',
            },
            {
              star: true,
              text: '**Dışarı giden tek bir HTTP dikişi** — zaman aşımları, gizleme ve hata eşlemesi tek bir yerde yaşar ve hiçbir satıcı SDK’sı kullanılmaz',
            },
            '**Uzantılar ve cihaz üstü modeller için veriye dayalı kataloglar** — birini eklemek bir sürüm değil, bir veri değişikliğidir',
            '**Node’un dâhilî SQLite’ı** — yerel bir veritabanı modülü yok, derlenecek bir şey yok',
            'Tek bir masaüstü kabuğunun arkasında **yaklaşık yetmiş dâhilî paket**, sürekli tümleştirmede uygulanan modül sınırlarıyla',
            'Her gönderimde Windows, macOS ve Linux üzerinde test edilir; buna yapılmış uygulamayı başlatan uçtan uca bir takım da dâhildir',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Kendiniz görün.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Henüz yapılmamış olanlara bakın', href: '/roadmap', variant: 'outline' },
    ],
  },
};
