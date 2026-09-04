import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/help.md (status: needs-assets)
 * @sourceSha256 04e4ff69 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/help.ts`.
 *
 * Çeviriye taşınan iki karar: rehberler yazılana kadar listelenir ama
 * bağlanmaz — bu site ölü bağlantı dağıtmaz — ve CAPTCHA sorusunun yanıtı
 * kaynak belgedeki koşulsuz "evet"i değil, siteyi izler: bugünkü davranış
 * insana devirdir, otomatik geçiş planlıdır.
 */
export const help: PageContent = {
  route: '/help',
  title: 'Yardım ve belgeler — Tepegöz',
  description:
    'Kurun, bir model anahtarı ekleyin, ilk ajan görevinizi çalıştırın, bir tünel kurun ve Tepegöz’ün yapmayı reddedeceklerini öğrenin.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Yardım',
    headline: 'Başlarken ve takıldığınızda.',
    subhead:
      'Aşağıdaki rehberler gerçek bir yapı üzerinden yazılıyor. Sık sorulan soruların yanıtları ise kesin — tarayıcının yapmayacaklarına dair olanlar dâhil.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Açıkta sorun', href: REPO_FILES.discussions, variant: 'outline', external: true },
    ],
  },

  sections: [
    {
      id: 'guides',
      eyebrow: 'Rehberler',
      heading: 'İlk açılıştan çekirdeğin reddettiklerine, dört hat.',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          body: [
            'Her rehber yazıldıkça, gerçek bir yapıdan alınmış ekran görüntüleriyle kendi sayfası olur. Belgelerin biçimini hepsi yerine oturmadan görebilesiniz diye burada listeleniyorlar.',
          ],
        },
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'İlk adımlar',
              body: 'Kurulum — bir sürüm çıkana kadar kaynaktan derleme · Model anahtarı ekleme — Anthropic, OpenAI, Gemini ya da Kimi ve nerede saklandığı · Yerel bir modelle tamamen çevrimdışı çalışma · İlk ajan göreviniz — hedefi ajan konsoluna devretmek ve geri gelen planı okumak.',
            },
            {
              title: 'Ajan',
              body: 'Bir koşu nerede başlar — ajan konsolu kenar çubuğu ve komut paletinin bugün ne yapıp ne yapmadığı · Canlı konsolu okumak — adımlar, gözlemler, maliyet, hatalar · Onaylar — risk katmanları, neyin durup sorduğu ve bazı şeylerin neden hiç açılmadığı · Makrolar · Zamanlanmış görevler · MCP sunucularına bağlanmak.',
            },
            {
              title: 'Tarayıcı',
              body: 'Sekmeler, gruplar ve profiller · İndirmeler ve karantina · Uzantılar — birlikte gelen dokuzu ve nasıl yapılandırılacakları · Türkçe klavye — Q ve F düzenleri, ölü tuşlar, arayüz dilini değiştirmek.',
            },
            {
              title: 'Mahremiyet ve ağ',
              body: 'Sekme bazlı VPN ve Tor — yapılandırma içe aktarma, bir sekmeyi ya da grubu bağlama · Bir tünel düştüğünde — öldürme anahtarının ne yaptığı ve ne göreceğiniz · Verilerinizin nerede durduğu — profil dizini, dışa aktarabilecekleriniz, bir yedeğin kaçırdıkları.',
            },
          ],
        },
        {
          kind: 'assetPlaceholder',
          label: 'Her rehber için, çalışan bir yapıdan alınmış adım adım ekran görüntüleri',
          note: 'Bir anlatım büyük ölçüde resimlerinden ibarettir: hangi panel, hangi alan, işe yaradığında neye benziyor. Buradaki her çekim bir çiziminden değil gerçek bir yapıdan çıkar ve her rehber, kendi görüntüleri çekildiğinde yayına girer — yukarıdaki hatların listelenip henüz bağlanmamasının nedeni de budur.',
        },
      ],
    },

    {
      id: 'faq',
      eyebrow: 'Sık sorulanlar',
      heading: 'Kısa yanıtlar.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Hesap açmam gerekiyor mu?',
              body: 'Hayır. Tepegöz hesabı yoktur ve açmanın bir yolu da yoktur.',
            },
            {
              title: 'Tepegöz’e ödeme yapmam gerekiyor mu?',
              body: 'Hayır. Tarayıcı özgür yazılımdır ve satın alınacak bir şey yoktur. Ajanı kullanırsanız, kendi anahtarınızla, doğrudan **yapay zekâ sağlayıcınıza** kendi fiyatlarından ödersiniz. Biz pay almayız ve trafiği görmeyiz. Yerel bir modelin donanımınız dışında bir maliyeti yoktur.',
            },
            {
              title: 'Hangi modeller çalışıyor?',
              body: 'Anthropic, OpenAI, Google Gemini ve Kimi; ayrıca kendi makinenizde çalışan yerel modeller.',
            },
            {
              title: 'API anahtarım güvende mi?',
              body: 'İşletim sisteminizin anahtar zinciriyle şifrelenir ve ayrıcalıklı süreçten hiç çıkmaz — ne bir günlüğe, ne arayüze, ne de bir isteme. Hiçbir şey bize ait bir sunucudan geçmez, çünkü sunucu yoktur.',
            },
            {
              title: 'Ajan param harcayabilir mi?',
              body: 'Yalnızca sizin yazdığınız bir cüzdan yetkisinden — koşudan önce kaydedilmiş bir tavan, bir alıcı listesi ve bir son kullanma tarihi. Etkin bir yetkinin dışında, finansal bir adım eylemi adıyla söyleyen açık bir onay ister. Her hâlükârda karar, baktığınız pencerede değil ayrıcalıklı süreçte uygulanır ve ajan elindeki bir yetkiyi genişletemez.',
            },
            {
              title: 'Bankama giriş yapabilir mi?',
              body: 'Yalnızca siz açarsanız. Bankacılık, kripto, sağlık ve parola yöneticisi siteleri — Türk bankacılığı ve bütün `gov.tr` ağacı dâhil — kategori bazlı bir iznin arkasında kapalı gelir. Ajanın yaptığı hiçbir şey birini açmaz; bunu siz bilerek yaparsınız ve istediğiniz an geri alabilirsiniz.',
            },
            {
              title: 'CAPTCHA çözecek mi?',
              body: 'Bugün CAPTCHA ve iki aşamalı doğrulama istemlerini saptar ve size devreder — koşu körlemesine yeniden denemek yerine duraklar. Otomatik geçiş planlıdır: iki aşamalı kodlar kimlik bilgisi aracısı tarafından tamamlanacak, böylece model onları hiç görmeyecek; insana devir de son çare olarak kalacak. Belirli bir sitenin otomatikleştirilmesine izin verilip verilmediği sizinle o site arasındadır; bkz. [/legal/terms](/legal/terms).',
            },
            {
              title: 'Yapılar imzalı mı?',
              body: 'Evet — Windows’ta kod imzalı, macOS’ta noter onaylı; yani ne SmartScreen ne de Gatekeeper sizi uyarır. Her sürüm ayrıca bir sağlama toplamı yayımlar. Hiçbir ikili dosyayı çalıştırmamayı tercih ederseniz, [/download](/download) sayfasında aynı uygulamayı kaynaktan üreten üç komut var.',
            },
            {
              title: 'Kararlı mı?',
              body: 'Hayır. Ön sürüm: bağımsız güvenlik denetimi olmayan ve otomasyonu bağımsız olarak ölçülmemiş erken bir yazılım. Bilinen sorunlar, siz keşfedin diye bırakılmak yerine yayımlanır.',
            },
            {
              title: 'macOS ve Linux’ta çalışıyor mu?',
              body: 'Her gönderimde ikisinde de derlenir ve test takımının tamamını geçer, ama birincil hedef Windows 11’dir ve elle test edilen odur. Diğer ikisinden gelen bildirimler gerçekten değerlidir.',
            },
            {
              title: 'Hatayı nasıl bildiririm? Güvenlik açığını?',
              body: 'Hatalar: yeniden üretim adımlarıyla birlikte GitHub Issues. **Güvenlik: asla herkese açık bir konuda değil** — özel güvenlik açığı bildirimini ya da e-postayı kullanın. Bkz. [/security](/security).',
            },
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Hâlâ takıldınız mı?',
    body: ['Hatalar ve sorular depoya gider. Güvenlik bildirimleri asla — onların kendi özel kanalı var.'],
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Güvenliği özel olarak bildirin', href: '/security', variant: 'outline' },
      { label: 'GitHub Discussions', href: REPO_FILES.discussions, variant: 'ghost', external: true },
    ],
  },
};
