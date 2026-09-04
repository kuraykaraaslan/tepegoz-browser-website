import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/turkey.md (status: ready)
 * @sourceSha256 b0f29dc1 (2026-08-23)
 *
 * Bu dosya ÇEVİRİ DEĞİL, ASLIDIR — ve sitedeki tek istisnası budur.
 *
 * Kaynak belgenin kendi notu böyle diyor: bu, Türkçe sürümün özgün, İngilizce
 * sürümün ise durumu dışarıdan bir okura açıklayan metin olduğu tek sayfadır.
 * `../en/turkey.ts` bir Türkçe konuşana Türkçenin neden önemsendiğini anlatmak
 * zorundadır; bu dosyanın böyle bir yükümlülüğü yok, çünkü okuru zaten her gün
 * Türkçe yazıyor. O yüzden burada aynı cümlelerin Türkçesi değil, aynı olguların
 * doğrudan anlatımı var: klavyeye ne yapıldığı, kamu hizmetlerinde tam olarak
 * neyin durduğu ve neyin hâlâ yazılmadığı.
 *
 * Bölüm kimlikleri iki dosyada aynı tutulur; bir bağlantı `#keyboard` diyorsa
 * her iki dilde de aynı yere inmelidir.
 */
export const turkey: PageContent = {
  route: '/turkey',
  title: 'Türkiye — Tepegöz',
  description:
    'Tam Türkçe eşitlik, kendine ait bir Türkçe klavye hattı ve bir kamu hizmetleri hattı — Türkiye’de, her gün Türkçe kullananlar için yazıldı.',
  status: 'ready',

  hero: {
    eyebrow: 'Türkiye',
    headline: 'Türkçe burada çeviri değil. Yazıldığı dil.',
    subhead:
      'Türkiye’de, her gün Türkçe kullananlar için yazıldı — bunun gerektirdiği klavye işleyişi, kamu hizmetleri çalışması ve dil eşitliğiyle birlikte.',
    ctas: [
      { label: 'Adın hikâyesi', href: '/story', variant: 'primary' },
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'parity',
      eyebrow: 'Yapının uyguladığı eşitlik',
      heading: 'Sabit kodlanmış bir dizge yapıyı kırar. Eksik bir çeviri bir tür hatasıdır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Tepegöz’de kullanıcıya görünen her dizge, Türkçe ve İngilizcenin **tam eşitlikte** durduğu türlenmiş bir katalogdan gelir ve ikisi aynı değişiklikte eklenir. Bu, insanlardan uyması istenen bir görgü kuralı değil: yapı bunu zorunlu kılar.',
            'Uygulama sürerken, yeniden başlatmadan dil değiştirebilirsiniz; tarayıcı da işletim sisteminizin dilinde açılır.',
            'Pratikte bunun anlamı şu: Türkçe arayüzde İngilizce bir düğmeye ya da yarısı çevrilmiş bir iletişim kutusuna denk gelmezsiniz. Denk gelirseniz o bir kusurdur ve kusur olarak bildirilebilir.',
          ],
        },
      ],
    },

    {
      id: 'keyboard',
      eyebrow: 'Klavye, düzgün yapılmış hâliyle',
      heading: 'Türkçe girdi yazılımı belirli ve iyi bilinen yerlerden kırar.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Noktalı ve noktasız `i`, `ç ğ ı ö ş ü` takımı, ölü tuşlar ve Q ile F düzenlerinin ikisinin de gerçekten kullanılıyor olması.',
            'Tepegöz’ün bunun için kendine ait bir girdi hattı ve sürekli tümleştirmede koşan bir **regresyon matrisi** var — ve bu, arayüzün hangi dile ayarlandığından bağımsız çalışır, çünkü pek çok kişi arayüzü İngilizce tutup gün boyu Türkçe yazar.',
            'Adres çubuğu ve komut paletindeki arama da aynı katlamayı kullanır: `İstanbul` yazmak ile `istanbul` yazmak aynı sonuçları getirir, iki `i` ayrımı bir eşleşmeyi sessizce düşürmez.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Bunun bir pazarlama sitesinde bölüm hak etmesinin nedeni',
          body: [
            'Rakip ajanlı tarayıcılar için yayımlanmış kullanıcı geri bildirimi çalışmalarında, İngilizce olmayan klavye ve girdi yöntemi işleyişi **P0 engelleyici** olarak kaydediliyor; onarılması gereken ilk diller arasında Türkçe adıyla anılıyor ve özellikle kenar panelindeki girdinin bozuk olduğu belirtiliyor. Karşılaştırmada dürüst yanıtın "Tepegöz önde" olduğu tek yer burası — bu yüzden yalnızca iddia edilmiyor, test ediliyor.',
          ],
        },
      ],
    },

    {
      id: 'public-services',
      eyebrow: 'Kamu hizmetleri',
      heading: 'Türkiye’de iş otomatikleştiren bir tarayıcı er geç e-Devlet, GİB, SGK ve MHRS ile karşılaşır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bunlar sıradan web siteleri değil: bir hatanın, yeniden denemenin geri alamayacağı sonuçları olur ve siteler kategori olarak zaten hassastır.',
            'Tasarım duruşu şimdiden sabit ve kayıtlı: **okumak serbest, yazmak zorunlu olarak sorulur** — kullanımdaki özerklik düzeyi ne olursa olsun, biyometrik onayla. Ayrıca bütün `gov.tr` ve `bel.tr` ağacı, Türk bankacılığıyla birlikte, yalnızca sizin açabileceğiniz kategori bazlı bir iznin arkasında kapalı gelir.',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Durum, açıkça',
          body: [
            'Sınıflandırma katmanı yazıldı ve incelendi. Asıl tarifler ve yerel paketler henüz yok. Bu, güven modeli önce çözülmüş, planlanmış bir iştir; dağıtılan bir özellik değildir. Bugün Tepegöz’ü açıp e-Devlet’te bir işi ajana bırakamazsınız.',
          ],
        },
      ],
    },

    {
      id: 'local',
      eyebrow: 'Yerel, her iki anlamda',
      heading: 'Verileriniz kendi makinenizde kalır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Yerel önce olmak, verilerinizin kendi makinenizde kalması demektir — her yerde geçerli bir mesele, ama alternatif oturumu açık ekranlarınızı başka bir yargı alanındaki bir sunucuya gönderen bir tarayıcı olduğunda özellikle geçerli.',
            'Tepegöz’ün arka ucu yok, hesabı yok ve telemetrisi yok; ajanını tümüyle kendi donanımınızdaki bir model üzerinde, hiçbir ağ bağımlılığı olmadan çalıştırabilir.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Yerli, her anlamda.',
    ctas: [
      { label: 'Adın hikâyesi', href: '/story', variant: 'primary' },
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'outline' },
    ],
  },
};
