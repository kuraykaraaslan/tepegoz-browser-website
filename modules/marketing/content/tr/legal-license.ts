import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/legal-license.md (status: ready)
 * @sourceSha256 3ce1a24c (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/legal-license.ts`. Lisans metninin kendisi
 * çevrilmez ve çevrilemez: bağlayıcı olan, İngilizce AGPL-3.0 metnidir. Bu
 * sayfadaki özet, kaynak dosyada olduğu gibi bir kolaylıktır ve öyle
 * etiketlenir.
 */
export const legalLicense: PageContent = {
  route: '/legal/license',
  title: 'Lisans — Tepegöz AGPL-3.0’dır',
  description:
    'Tepegöz, GNU Affero General Public License v3.0 ile lisanslanmıştır — size ne verdiği, karşılığında ne istediği ve birlikte dağıtılan bileşenler.',
  status: 'ready',

  hero: {
    eyebrow: 'Hukuki',
    headline: 'Tepegöz, GNU Affero General Public License sürüm 3 ile lisanslanmıştır.',
    subhead: 'Telif hakkı © 2026 Kuray Karaaslan.',
    ctas: [
      { label: 'Lisans metninin tamamı', href: REPO_FILES.license, variant: 'primary', external: true },
    ],
  },

  sections: [
    {
      id: 'plain-language',
      eyebrow: 'Sade dille',
      heading: 'Kolaylık olsun diye bir özet — bağlayıcı olan lisans metnidir.',
      lede: 'Bu özet bir kolaylıktır ve öyle etiketlenmiştir. Bir özet asla bağlayıcı olmaz; lisans olur.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              label: 'Yapabilecekleriniz',
              items: [
                '**Her amaçla kullanın.** Kişisel, ticari, bir kurum içinde, istediğiniz sayıda makinede. Ücret yok, kayıt yok, kullanıcı sayısı yok.',
                '**Tamamını okuyun.** Tarayıcının her satırı herkese açıktır.',
                '**Değiştirin.** Çatallayın, soyun, ondan başka bir şey üretin.',
                '**Paylaşın**, değiştirilmiş ya da değiştirilmemiş hâliyle.',
              ],
            },
            {
              state: 'planned',
              label: 'Lisansın karşılığında istedikleri',
              items: [
                '**Dağıtıyorsanız kaynağı da dağıtın** — kendi sürümünüzü, aynı lisansla ve değişikliklerinizle birlikte.',
                '**Değiştirilmiş bir sürümü bir ağ hizmeti olarak çalıştırıyorsanız, o hizmeti kullananlar kaynağına erişebilmelidir.** "Affero" maddesi budur ve bu lisansın seçilme nedeni de odur: birinin özgür yazılımı alıp değiştirmesinin ve hiçbir şey geri vermeden barındırılan bir ürün olarak sunmasının önünü kapatır.',
                '**Bildirimleri koruyun.** Telif hakkı ve lisans bildirimleri yerinde kalır.',
              ],
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Yapmadıkları',
          body: [
            'Yazılımı paralı hâle getirmez ve onunla ürettiğiniz bir şey için ücret almanızı engellemez.',
            'Size ticari marka hakkı vermez — bkz. [/legal/terms](/legal/terms).',
            '**Hiçbir garanti sunmaz.** Yazılım olduğu gibi sunulur ve ön sürüm ile denetlenmemiş olduğu düşünülürse, bunu tam anlamıyla ciddiye alın.',
          ],
        },
      ],
    },

    {
      id: 'why-agpl',
      eyebrow: 'Neden AGPL',
      heading: 'Neden MIT değil.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'İzin verici bir lisans, Tepegöz’ü daha çok yere daha hızlı sokardı. Aynı zamanda bu projenin kaçınmak için var olduğu o belirli sona da izin verirdi: kaynakları bol bir şirket, güvenlik odaklı ve yerel önce bir tarayıcıyı alır, çatalı kapatır, barındırılan bir hizmet olarak sunar ve hiçbir şey geri vermez — bu sırada aslın merkezî sözü, _sizin adınıza karar vereni okuyabilirsiniz_, kullanıcılarının çoğu için sessizce geçerliliğini yitirir.',
            'AGPL bu seçeneği ortadan kaldırır. Bedeli gerçektir ve bilerek kabul edilmiştir: bazı kuruluşlar AGPL koduna hiç dokunmaz.',
          ],
        },
      ],
    },

    {
      id: 'commercial',
      eyebrow: 'Ticari lisanslama',
      heading: 'Ayrı bir lisans mümkündür.',
      blocks: [
        {
          kind: 'prose',
          body: [
            `Telif hakkı tek bir yazarda olduğundan, koşulları gerçekten gerektirenler için ayrı bir ticari lisans mümkündür. AGPL-3.0 sizin durumunuza uymuyorsa **${SITE.securityContact}** adresine yazın ve durumu anlatın.`,
          ],
        },
      ],
    },

    {
      id: 'contributions',
      eyebrow: 'Katkılar',
      heading: 'Gelen, gidene eşittir.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Katkılar, projeyle aynı koşullarla AGPL-3.0 altında lisanslanır. Katkıda bulunan lisans sözleşmesi ve telif devri yoktur — emeğiniz sizin kalır.',
          ],
        },
        {
          kind: 'ctas',
          items: [{ label: 'Nasıl katkı verilir', href: '/open-source', variant: 'outline' }],
        },
      ],
    },

    {
      id: 'third-party',
      eyebrow: 'Üçüncü taraf bileşenler',
      heading: 'Neyin, hangi lisansla yeniden dağıtıldığı.',
      lede: 'Tepegöz az miktarda üçüncü taraf malzemeyi yeniden dağıtır ve her parça kendi lisansıyla — bir lisans gerektiriyorsa neyin değiştirildiğini söyleyen bir beyanla birlikte — kayıt altındadır.',
      blocks: [
        {
          kind: 'table',
          caption: 'Yeniden dağıtılan üçüncü taraf bileşenler',
          head: ['Bileşen', 'Lisans'],
          rows: [
            ['`buildDomTree` algılama tekniği', 'MIT ve Apache-2.0 (browser-use, nanobrowser)'],
            ['kui-player gömülü video paketi', 'Apache-2.0'],
            ['KUIreact bileşen atomları', '0BSD'],
            ['Baloo 2 yazı tipi', 'SIL OFL 1.1'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Herkese açık kayıt defterinden kurulan bağımlılıklar burada yeniden dağıtılmaz; dikkate değer olanlar ve lisansları yukarıdakilerle birlikte listelenir.',
            `**Bildirimlerin tamamı** → [THIRD-PARTY-NOTICES.md](${SITE.repo}/blob/main/THIRD-PARTY-NOTICES.md)`,
            'Bir şeyin yanlış atfedildiğini düşünüyorsanız — özellikle de sizin emeğinizse — söyleyin, düzeltilsin. Atıf hataları kusur muamelesi görür.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Lisansın kendisini okuyun.',
    body: ['Yazılımın her kopyasıyla birlikte de gelir.'],
    ctas: [
      { label: 'Lisans metninin tamamı', href: REPO_FILES.license, variant: 'primary', external: true },
      { label: 'Açık kaynak, açıklandı', href: '/open-source', variant: 'outline' },
    ],
  },
};
