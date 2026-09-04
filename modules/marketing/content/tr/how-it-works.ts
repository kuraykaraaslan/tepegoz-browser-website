import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/how-it-works.md (status: needs-assets) @sourceSha256 5d905ef5 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/how-it-works.ts`; oradaki gerekçe yorumları —
 * özellikle "Sor" adımının komut paleti iddiasından neden düzeltildiği —
 * buraya kopyalanmaz, çünkü iki dosyada anlatılan bir karar birinde bayatlar.
 */
export const howItWorks: PageContent = {
  route: '/how-it-works',
  title: 'Tepegöz nasıl çalışır — planla, davran, denetimi elinde tut',
  description:
    'Hedeften plana, plandan eyleme: model daha çalışmadan önce ajanın neye izinli olduğuna karar veren belirlenimci bir güvenlik çekirdeğiyle.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Nasıl çalışır',
    headline: 'Siz hedefi verirsiniz. O size planı verir. Direksiyon sizde kalır.',
    subhead:
      'Tepegöz bir cümleyi adımlara çevirir, bu adımları gerçek sayfalarda çalıştırır ve her birini olurken size gösterir. Neye izinli olduğuna, modele hiç danışılmadan önce, ayrıcalıklı süreçte, kurallar karar verir.',
  },

  sections: [
    {
      id: 'stages',
      eyebrow: 'Dört aşama',
      heading: 'Bir cümleden tamamlanmış bir göreve.',
      blocks: [
        {
          kind: 'assetPlaceholder',
          label: 'Güven sınırının şeması',
          note: 'Bir yanda güvenilmez sayfa, diğer yanda çekirdek ile model. Ürün o sınırın kendisidir — bir şema çizilecekse, sınırı çizer.',
        },
        {
          kind: 'steps',
          items: [
            {
              title: 'Sor',
              body: '**Ajan Konsolu**’nu açın ve ne istediğinizi Türkçe ya da İngilizce söyleyin. Konsol, araç çubuğundaki Ajan panelidir ve bulunduğunuz sayfanın yanında açılır: hedefi alttaki kutuya yazın, `Enter`’a basın; koşu, size her adımı gösterecek olan aynı panelde başlar. Adres çubuğu bambaşka bir şey olarak kalır. Belirlenimci biçimde gezinir ve arar, bir yazım hatasını asla bir yapay zekâ isteğine çevirmez. Oradan ajana giden tek yol, bilerek yazdığınız bir komuttur: `@agent`, ardından görev. `Ctrl+K` ise komut paletini açar — o da yine ayrı bir yüzeydir: bugün tarayıcı komutlarını çalıştırır (yeni sekme, kapatılan sekmeyi geri aç, yenile, ayarlar) ve **Yap**, **Üret** ile **Görevler** sekmeleri, o kipler geliştirilirken bilerek boş gösterilir. Palete bir hedef yazmak bir koşu başlatmaz.',
            },
            {
              title: 'Algıla',
              body: 'Davranmadan önce ajan, sayfayı bir yardımcı teknolojinin okuyacağı gibi okur: canlı DOM üzerinde yapısal bir geçiş, bir insanın gerçekten etkileşebileceği öğeleri döndürür — görünür, en üstte, görüntü alanında olanları — açık gölge kökleri ve aynı kaynaklı çerçeveler dâhil. Bir sayfadan gelen her şey **veri sayılır, asla talimat değil**. Sayfa metni normalleştirilir ve girdiği sınırda enjekte edilmiş komutlara karşı taranır; çünkü ajanınızla konuşabilen bir web sayfası, ona emir verebilen bir web sayfasıdır.',
            },
            {
              title: 'Karar ver',
              body: 'Ajan ürünlerinin çoğunun modele bıraktığı kısım budur. Tepegöz bırakmaz. Her araç çağrısı, model çalışmadan önce **belirlenimci bir politika çekirdeği** tarafından — araca, argümana ve hedefe göre — altı risk katmanından birine sınıflandırılır: okuma, arayüz yazma, veri çıkışı, finansal, kimlik bilgisi, yıkıcı. Sonrasında ne olacağına katman karar verir: çalıştır, size sor ya da düpedüz reddet.',
            },
            {
              title: 'Davran ve işini göster',
              body: 'Adımlar gerçek sekmelerde çalışır. Canlı konsol sayfayı, eylemi, gözlemleneni, ilerlemeyi, jeton maliyetini ve hataları gösterir — sonradan değil, olurken. Her adım yalnızca ekleme yapılan bir olay günlüğüne yazılır; böylece biten bir koşu yeniden oynatılabilir ve denetlenebilir. Bir adım geri alınamaz olduğunda durur ve söz konusu eylemi tek tek yazarak sorar.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Kararın çekirdekte verilmesinin iki sonucu',
          body: [
            '**Baktığınız pencerenin oy hakkı yoktur.** Özerklik düzeyi, izinler ve onaylar ana süreçte uygulanır. Ele geçirilmiş ya da yönlendirilmiş bir sayfa sizin adınıza hiçbir şeyi onaylayamaz — yalnızca yetkisi değil, buna imkânı yoktur.',
            '**Hassas kategoriler siz açana kadar kapalıdır.** Bankacılık, kripto, sağlık ve parola yöneticisi yüzeyleri — Türk bankacılığı ve bütün `gov.tr` ağacı dâhil — kapalı gelen kategori bazlı bir iznin arkasındadır. Ajan bunlardan birini açamaz. Yalnızca siz açabilirsiniz ve o karar da ayrıcalıklı süreçte uygulanır.',
          ],
        },
      ],
    },

    {
      id: 'failure',
      eyebrow: 'Hata yönetimi',
      heading: 'İşler ters gittiğinde ne yapıyor.',
      lede: 'Gerçek sayfalar ajanları kırar. Yerleşimler ayaklarının altında kayar, öğeler karar ile tıklama arasında kaybolur, iletişim kutuları basmak üzere oldukları şeyin üstünü örter ve kötü bir döngü aynı şeyi sonsuza dek yaparak bir saati ve bir bütçeyi yakabilir.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Bayatlamış referanslar yapısal olarak yakalanır.** Ajan, sayfanın yapısını karar verdiği andaki hâliyle karşılaştırır; zemin kaydıysa karanlığa tıklamak yerine yeniden okur.',
            '**Döngüler saptanır ve durdurulur**; koşu, dönmeye bırakılmak yerine size geri verilir.',
            '**CAPTCHA ve iki aşamalı doğrulama istemleri otomatik geçilir.** İki aşamalı kodlar kimlik bilgisi aracısı tarafından tamamlanır, böylece ikinci faktör model onu hiç görmeden doldurulur. Tarayıcının geçemediği bir engel, körlemesine yeniden denenmek yerine size geri verilir.',
            '**Tamamlanma varsayılmaz, denetlenir.** "Düğmeye tıkladım" ile "iş oldu" aynı iddia değildir ve ikisi bilerek ayrılmıştır.',
          ],
        },
      ],
    },

    {
      id: 'a-real-run',
      eyebrow: 'Gerçek bir koşu',
      heading: 'Birini satır satır okuyun.',
      lede: 'Yukarıdaki her şey bir tarif. Bu ise gerçekten olmuş bir koşu: canlı bir sitede bir arama, bir başkasında açılan bir başlık, onay için iki duruş ve başarısız olup toparlanılan bir adım. Tarayıcının kendi olay günlüğü, yeniden oynatılıyor — bir canlandırma değil ve inanmak zorunda kalacağınız bir video da değil. Ayrıca ana sayfadaki kayıttan **farklı ve daha uzun bir koşu**: bir kaydı okumak size bir bakışa, izlemek ise bütün süresine mal olur; bu yüzden ikisi aynı çekim olmaya zorlanmak yerine farklı işler için seçildi.',
      blocks: [
        {
          kind: 'journalReplay',
          trace: 'reddit-electron-memory',
          label: 'Kaydedilmiş bir ajan koşusunun yeniden oynatımı',
          caption:
            'Bu koşu iki kez, iki ayrı nedenle durur — bir kez açmak üzere olduğu adres görevi veren kişiden değil okuduğu metinden geldiği için, bir kez de adım saklanan durumu değiştireceği için. İkisi de çekirdeğin çağrıyı sınıflandırmasıdır ve bu sınıflandırma modele danışılmadan önce yapılmıştır. Burada bir adım da başarısız olur ve ajan aynı yanıta başka bir yoldan ulaşır. [Hâlâ kanıtlanmamış olanlara bakın](/roadmap).',
        },
      ],
    },

    {
      id: 'models',
      eyebrow: 'Modeller',
      heading: 'Kendi modelinizi getirin.',
      lede: 'Tepegöz’ün kendi modeli yoktur ve arada bir vekil sunucu da yoktur. Bir anahtar eklersiniz, onu kullanır.',
      blocks: [
        {
          kind: 'table',
          caption: 'Desteklenen model sağlayıcıları',
          head: ['Sağlayıcı', 'Durum'],
          rows: [
            ['Anthropic (Claude)', 'Destekleniyor'],
            ['OpenAI', 'Destekleniyor'],
            ['Google Gemini', 'Destekleniyor'],
            ['Kimi', 'Destekleniyor'],
            ['Yerel modeller', 'Destekleniyor, tamamen çevrimdışı'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Anahtarlar işletim sisteminin anahtar zinciriyle şifrelenmiş olarak saklanır, yalnızca ayrıcalıklı süreçte tutulur ve günlüklerden çıkarılır. Sağlayıcınıza doğrudan, onun fiyatlarından ödersiniz. **Tepegöz pay almaz, trafiği görmez ve hesap istemez.**',
            'Yerel modeller daha aşağı bir kip değil, aynı bağlantı noktasıdır: onu kendi donanımınızdaki bir modele yöneltin, tarayıcı hiçbir ağ bağımlılığı olmadan çalışsın.',
          ],
        },
      ],
    },

    {
      id: 'never',
      eyebrow: 'Kesin sınırlar',
      heading: 'Ajanın yapmasına izin verilmeyenler.',
      lede: '"Ne yapabilir" sorusunu her rakip yanıtlıyor. "Neyi asla yapamaz" sorusunu neredeyse hiçbiri yanıtlamıyor.',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            'Kendi izinlerini onaylayamaz. İzinler, sizin onayladığınız bir plandan üretilir ve koşuyla birlikte sona erer; ajan elindeki bir izni genişletemez.',
            'Sizin kendiniz açmadığınız hassas bir kategoriye — bankacılık, kripto, sağlık, parola yöneticileri — erişemez. O izinler kapalı gelir ve ajanın yaptığı hiçbir şey birini açmaz.',
            'Modele kimlik bilgisi gönderemez. Sırlar, modelin içeriğini hiç görmediği bir aracı tarafından doldurulur; buna iki aşamalı doğrulama kodları da dâhildir.',
            'Yazdığınız cüzdan yetkisinin dışında harcama yapamaz. Tavan, alıcılar ve son kullanma tarihi sizindir; ajan bunların içinde harcayabilir, hiçbirini yükseltemez.',
            'Açık ve belirli bir onay olmadan, başında kimse yokken bir şey silemez.',
            'Bağlı olduğu bir tünel düştüğünde sessizce gerçek bağlantınıza dönemez. Durur.',
          ],
        },
      ],
    },

    {
      id: 'limits',
      eyebrow: 'Dürüst sınırlar',
      heading: 'Burası hâlâ kanıtlanmamış olan yer.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Yukarıdaki mekanizmalar yazıldı ve test edildi. **Olmayan** şey, ajanın gerçek görevleri alternatiflere kıyasla ne kadar iyi tamamladığının bağımsız olarak ölçülmesidir. Kıyaslama protokolü yazıldı ve önceden kaydedildi — iddianın, yeniden üretilmeyi bıraktığı anda geri çekileceğini söyleyen madde dâhil — ama koşuların parası ödenmedi.',
            'Ödenene kadar bu sayfa Tepegöz’ün nasıl karar verdiğini anlatır, ne sıklıkla başardığını değil. Size tarayıcı ajanının başarı oranını tarihli ve kör puanlanmış bir belge olmadan söyleyen herkes, size bir his söylüyordur.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Faz faz tam durum', href: '/roadmap', variant: 'outline' }],
        },
      ],
    },
  ],

  closing: {
    heading: 'Çalıştırın ve görün.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Neyle geldiğini görün', href: '/features', variant: 'outline' },
    ],
  },
};
