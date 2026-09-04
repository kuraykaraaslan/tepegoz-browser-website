import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/open-source.md (status: ready) @sourceSha256 2fd5ca55 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/open-source.ts`.
 */
export const openSource: PageContent = {
  route: '/open-source',
  title: 'Açık kaynak — Tepegöz AGPL-3.0’dır',
  description:
    'Tepegöz AGPL-3.0 lisanslıdır. Tarayıcının tamamı okunabilir, çatallanabilir ve denetlenebilir — ve kimse onu kapatıp size geri satamaz.',
  status: 'ready',

  hero: {
    eyebrow: 'Açık kaynak',
    headline: 'Hepsi. Üstelik böyle kalmasını sağlayan bir lisansla.',
    subhead:
      'Güvenlik çekirdeği, ajan çalışma zamanı, uzantılar, ağ katmanı, testler. Bir tanıtım değil; ilginç kısımları saklanmış bir çekirdek de değil.',
    ctas: [
      { label: 'Kaynağı okuyun', href: SITE.repo, variant: 'primary', external: true },
      { label: 'Lisans metninin tamamı', href: '/legal/license', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Neden özellikle burada',
      heading: '"Bize güvenin" kabul edilebilir bir yanıt değildir.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Sizden, anahtarlarınızı tutan, oturumunuzun açık olduğu sayfaları okuyan ve sizin adınıza davranabilen bir tarayıcıyı kurmanız isteniyor. "Bize güvenin", bunun nasıl davrandığına dair hiçbir soruya kabul edilebilir bir yanıt değildir.',
            'Bu yüzden yanıt şudur: **okuyun.** Ajanın neye izinli olduğuna karar veren kurallar, açabileceğiniz bir dosyadır. Sırların saklandığı yer, açabileceğiniz bir dosyadır. Telemetri olmadığı iddiası, olsaydı var olması gereken ağ çağrısı aranarak doğrulanabilir.',
            'Buradaki açık kaynaklılık bir lisans tercihi değildir. Bu sitedeki güvenlik iddialarının bir değer taşıdığı tek biçimdir.',
          ],
        },
      ],
    },

    {
      id: 'licence',
      eyebrow: 'Lisans',
      heading: 'GNU Affero General Public License v3.0.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Size verdiği',
              body: 'Her amaçla çalıştırın. Okuyun. Değiştirin. Paylaşın. Kendi çatalınızı dağıtın.',
            },
            {
              title: 'Karşılığında istediği',
              body: 'Değiştirilmiş bir sürümü dağıtırsanız, kaynağının aynı lisansla erişilebilir olması gerekir. Ve _Affero_ sürümü olduğu için: **değiştirilmiş bir sürümü bir ağ hizmeti olarak çalıştırırsanız, o hizmeti kullananlara da kaynağının sunulması gerekir.**',
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            '**Neden bu lisans, izin verici bir lisans değil.** Açıkça söylemek gerekirse: bariz sonu engellemek için. İyi finanse edilmiş bir rakip, güvenlik odaklı bir tarayıcıyı alır, çatalı kapatır, barındırılan bir ürün olarak satar ve hiçbir şey geri vermez. AGPL o sonu erişilemez kılar. Bu bilinçli bir takastır — bazı şirketler AGPL koduna dokunmaz ve bu bedel bilerek kabul edildi.',
            'Telif hakkı tek bir yazarda olduğundan, durumu gerçekten gerektirenler için ayrı bir ticari lisans mümkündür. Sorun.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Tam metin', href: '/legal/license', variant: 'outline' },
            {
              label: 'Üçüncü taraf bileşenler',
              href: `${SITE.repo}/blob/main/THIRD-PARTY-NOTICES.md`,
              variant: 'ghost',
              external: true,
            },
          ],
        },
      ],
    },

    {
      id: 'repository',
      eyebrow: 'Depo',
      heading: 'Bir yapı betiği olan pazarlama deposu değil.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            'Tek bir masaüstü kabuğunun arkasında yaklaşık **yetmiş dâhilî paket**, modül sınırları makineyle uygulanarak',
            '**Dokuz birinci taraf uzantı**',
            'Her gönderimde Windows, macOS ve Linux üzerinde çalışan, **yapılmış** uygulamayı başlatan uçtan uca bir takım',
            'Yayımlanmış bir **tehdit modeli**, **39 mimari karar kaydı** ve neyin ölçülmediğini söyleyen faz faz bir yol haritası',
            '**Sıfır** `@ts-ignore`, **sıfır** atlanmış test ve yapıyı kırmasına izin verilen bir bağımlılık denetimi',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: [
            `Yukarıdaki her sayı depoda doğrulanabilir ve bunları uygulayan [sürekli tümleştirme yapılandırması](${SITE.repoCi}) herkese açıktır.`,
          ],
        },
      ],
    },

    {
      id: 'contributing',
      eyebrow: 'Katkı',
      heading: 'Şu anda gerçekten işe yarayanlar.',
      lede: 'Bu, tek geliştiricili, ön sürüm bir projedir. Neyin yardımı olacağını da bu belirler.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'available',
              label: 'Şu anda en değerlisi',
              items: [
                'Yeniden üretim adımları olan hata bildirimleri — bir sayfa örneği, bir tarifi döver',
                'Özel olarak bildirilen **güvenlik bulguları**',
                'Bilinen sorunlar listesinde zaten yer alan her şey için düzeltmeler',
                'Türkçe ve İngilizce ifade düzeltmeleri',
                'macOS ve Linux platform bildirimleri, çünkü elle en çok test edilen Windows’tur',
              ],
            },
            {
              state: 'planned',
              label: 'Yazmadan önce sorun',
              items: [
                'Büyük olan her şey ve güvenlik çekirdeğine, model ağ geçidine ya da süreçler arası iletişim sözleşmesine dokunan her şey.',
                'Önce bir konu açıp yaklaşımda anlaşın — bu alanlarda istenmeden gelen büyük bir birleştirme isteği genelde birleştirilemez ve bu bizim değil, sizin akşamınızı harcar.',
              ],
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            '**Sürekli tümleştirmenin sizden isteyecekleri.** Kaçış kapağı olmayan katı TypeScript, her güven sınırında şema doğrulaması, aynı birleştirme isteğinde İngilizce ve Türkçe dizgeler, modül sınırı kuralları, kapsam eşikleri ve işleme mesajlarında yapay zekâ atıf satırlarının bulunmaması. Hepsi mekaniktir ve hepsi siz başlamadan önce yazılıdır.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Buradan başlayın', href: REPO_FILES.contributing, variant: 'outline', external: true },
            {
              label: 'Bağlayıcı kurallar',
              href: `${SITE.repo}/blob/main/docs/engineering-rules.md`,
              variant: 'ghost',
              external: true,
            },
          ],
        },
      ],
    },

    {
      id: 'governance',
      eyebrow: 'Yönetişim',
      heading: 'Tek geliştirici, dürüstçe.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Vakıf yok, yönlendirme kurulu yok, kurumsal destekçi yok. Mimariyi şekillendiren kararlar depoda karar kayıtları olarak tutulur; böylece sonucuna katılmasanız bile gerekçeyi okuyabilirsiniz — ve kabul edilmiş bir kararla çelişmek, eskisinde sessiz bir düzenleme değil, yeni bir kayıt gerektirir.',
            'Katkılar AGPL-3.0 altında gelen-giden eşitliğiyle alınır. Katkıda bulunan lisans sözleşmesi yoktur ve telif devri yoktur: emeğiniz sizin kalır, projenin lisanslandığı gibi lisanslanmış olarak.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Okuyun, çatallayın, kırın.',
    ctas: [
      { label: 'Kaynağı okuyun', href: SITE.repo, variant: 'primary', external: true },
      { label: 'Güvenlik açığı bildirin', href: '/security', variant: 'outline' },
    ],
  },
};
