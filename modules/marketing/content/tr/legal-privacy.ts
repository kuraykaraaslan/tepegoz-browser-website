import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/legal-privacy-policy.md
 * @sourceSha256 9ddf136a (2026-08-23)
 * (status: draft-legal — TASLAK, HUKUKİ TAVSİYE DEĞİLDİR, OLDUĞU GİBİ GÜVENİLMEZ)
 *
 * Türkçe çeviri. Kaynak `../en/legal-privacy.ts`.
 *
 * `draft-legal` durumu bir uyarı şeridi çizer ve sayfayı `noindex` işaretler;
 * doldurulmamış `{{PLACEHOLDER}}` belirteçleri zengin metin işleyicisi
 * tarafından vurgulanır. Üçü de bilerektir: kaynak dosya, yayımdan önce bir
 * avukat incelemesini ve her yer tutucunun doldurulmasını şart koşar.
 *
 * Yer tutucular ÇEVRİLMEZ. `{{CONTACT_EMAIL}}` iki dilde de aynı belirteçtir;
 * çevrilmiş bir belirteç, doldurulacak yeri bulan aramadan kaçar ve boş bir
 * alanın hukuki bir belgede yayımlanmasına yol açar.
 *
 * Kaynaktan bir sapma, olgusal bir iddiayı değiştirdiği için burada da kayıtlı:
 * kaynak belge bir "sürüm bildirimi" e-posta toplama bölümü taslaklıyor. Bu site
 * böyle bir form içermiyor — arka ucu olmayan bir statik dışa aktarım ve
 * barındırılan her form sağlayıcısı, site kurallarının yasakladığı bir üçüncü
 * taraf betiği. Aşağıdaki bölüm bu yüzden hiçbir adres toplanmadığını söylüyor;
 * gerçekte doğru olan budur.
 */
export const legalPrivacy: PageContent = {
  route: '/legal/privacy',
  title: 'Gizlilik politikası — Tepegöz',
  description:
    'Bu web sitesinin ne topladığı, nedeni ve KVKK ile GDPR kapsamındaki haklarınızı nasıl kullanacağınız.',
  status: 'draft-legal',

  hero: {
    eyebrow: 'Hukuki',
    headline: 'Web sitesi gizlilik politikası',
    subhead:
      'Bu politika, Tepegöz pazarlama web sitesi olan {{SITE_DOMAIN}} adresini kapsar. Son güncelleme: {{DATE}}.',
  },

  sections: [
    {
      id: 'scope',
      heading: 'Kapsam',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu politika, Tepegöz pazarlama web sitesi olan {{SITE_DOMAIN}} adresini kapsar.',
            'Tepegöz tarayıcı uygulamasını **kapsamaz**. Tarayıcının arka ucu, hesabı ve telemetrisi yoktur ve bize hiçbir şey göndermez — bu, [/privacy](/privacy) sayfasında anlatılır ve bir politikada verilmiş bir söz değil, yazılımın bir özelliğidir.',
          ],
        },
      ],
    },

    {
      id: 'controller',
      heading: 'Sorumlu kim',
      blocks: [
        {
          kind: 'table',
          caption: 'Veri sorumlusu bilgileri',
          head: ['Alan', 'Değer'],
          rows: [
            ['Veri sorumlusu', '{{CONTROLLER_LEGAL_NAME}}'],
            ['Adres', '{{CONTROLLER_ADDRESS}}'],
            ['İletişim', '{{CONTACT_EMAIL}}'],
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          body: [
            'Proje, kayıtlı bir şirket yerine bir gerçek kişi tarafından işletiliyorsa, bu, kişinin adıyla birlikte açıkça belirtilmelidir. Belirsiz bir veri sorumlusu kimliği, başlı başına bir uyum kusurudur.',
          ],
        },
      ],
    },

    {
      id: 'collect',
      heading: 'Ne topluyoruz',
      blocks: [
        {
          kind: 'callout',
          tone: 'success',
          title: 'Hiçbir e-posta adresi toplanmıyor.',
          body: [
            'Bu sitede hiçbir türde form yoktur. Sürüm bildirim listesi yoktur, iletişim formu yoktur ve bülten yoktur. Hiçbir sayfadaki hiçbir şey, yazdığınızı kimseye iletmez.',
          ],
        },
        {
          kind: 'prose',
          body: ['**Sunucu günlükleri.** Sitenin sunulmasının bir sonucu olarak barındırma sağlayıcısı tarafından kaydedilir.'],
        },
        {
          kind: 'table',
          caption: 'Sunucu günlüğü işleme',
          head: ['Konu', 'Ayrıntı'],
          rows: [
            ['Ne', 'IP adresi, kullanıcı aracısı, istenen URL ve zaman damgası'],
            ['Neden', 'Siteyi ayakta tutmak ve kötüye kullanımı saptamak'],
            ['Hukuki dayanak', 'Meşru menfaat (GDPR m. 6(1)(f)); KVKK m. 5/2(f)'],
            ['Ne kadar süre', '{{LOG_RETENTION}}'],
            ['Veri işleyen', '{{HOSTING_PROVIDER}}, {{HOSTING_LOCATION}}'],
          ],
        },
      ],
    },

    {
      id: 'not-collected',
      heading: 'Ne toplamıyoruz',
      blocks: [
        {
          kind: 'list',
          variant: 'deny',
          items: [
            '**Üçüncü taraf analitiği yok.**',
            '**Reklam ya da izleme çerezi yok.**',
            '**Siteler arası izleme yok.**',
            '**Profilleme ve otomatik karar verme yok.**',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: [
            'Bu paragrafın var olmasına yalnızca doğru kaldığı sürece izin verilir. Mahremiyet öncelikli bir tarayıcının web sitesine bir analitik betiği eklemek, ürünün merkezî iddiasıyla çelişir ve bu bölümü yanlış bir beyana çevirir — bu da yalnızca utandırıcı değil, hukuki bir sorundur.',
          ],
        },
      ],
    },

    {
      id: 'cookies',
      heading: 'Çerezler',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu site **hiçbir çerez** yerleştirmez. Tema tercihiniz, cihazınızda, tarayıcınızın yerel deposunda saklanır ve hiçbir yere iletilmez. Site verilerini temizlemek bunu siler.',
            '{{COOKIE_STATEMENT}} — bir inceleyicinin yukarıdakini dağıtılan yapıya karşı doğrulaması ve ileride bir çerez eklenirse onu tek tek listelemesi gerekir (ad, amaç, ömür).',
          ],
        },
      ],
    },

    {
      id: 'where',
      heading: 'Veri nereye gidiyor',
      blocks: [
        {
          kind: 'prose',
          body: [
            '{{DATA_LOCATION_STATEMENT}} — barındırma ülkesi adıyla belirtilmelidir. Kişisel veri Türkiye dışına çıkıyorsa KVKK’nın yurt dışına aktarım kuralları uygulanır ve dayanılan mekanizma adıyla belirtilmelidir. AEA dışına çıkıyorsa GDPR’ın V. Bölüm mekanizması adıyla belirtilmelidir.',
          ],
        },
      ],
    },

    {
      id: 'rights',
      heading: 'Haklarınız',
      blocks: [
        {
          kind: 'prose',
          body: [
            '**KVKK m. 11** ve **GDPR (m. 15–22)** uyarınca verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması ve taşınabilirlik talep edebilir; işlemeye itiraz edebilir ya da açık rızanızı dilediğiniz an geri alabilirsiniz. Rızanın geri alınması, o ana kadar gerçekleşmiş işlemeyi etkilemez.',
            'Bunlardan herhangi birini kullanmak için {{CONTACT_EMAIL}} adresine yazın. **30 gün** içinde yanıt veriyoruz.',
            'Ayrıca bir denetim makamına şikâyette bulunabilirsiniz — Türkiye’de **Kişisel Verileri Koruma Kurumu (KVKK Kurumu)**; AEA’da kendi ülkenizin veri koruma makamı.',
          ],
        },
      ],
    },

    {
      id: 'children',
      heading: 'Çocuklar',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu site {{AGE_THRESHOLD}} yaşından küçük çocuklara yönelik değildir ve bilerek onların verilerini toplamayız.',
          ],
        },
      ],
    },

    {
      id: 'security',
      heading: 'Güvenlik',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Aktarım hâlindeki veri TLS ile korunur. Bir ihlal durumunda, KVKK ve GDPR m. 33–34 gereğince etkilenen kişileri ve ilgili makamı bilgilendiririz.',
          ],
        },
      ],
    },

    {
      id: 'changes',
      heading: 'Değişiklikler',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Esaslı değişiklikler, yeni bir "son güncelleme" tarihiyle bu sayfada duyurulur.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Tarayıcı ayrı bir konudur.',
    body: [
      'Bu politika web sitesiyle ilgilidir. Tarayıcının verilerinizi nasıl işlediği yazılımın bir özelliğidir ve tamamı [/privacy](/privacy) sayfasında anlatılır.',
    ],
    ctas: [{ label: 'Ürün mahremiyeti', href: '/privacy', variant: 'outline' }],
  },
};
