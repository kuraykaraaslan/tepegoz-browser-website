import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/network-privacy.md (status: needs-assets)
 * @sourceSha256 a2055e58 (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/network-privacy.ts`. Sayfanın borçlu olduğu tek
 * varlık — üç sekme, üç ayrı çıkış şeması — burada da dürüst bir boşluk olarak
 * durur; yerine bir maket konmaz.
 */
export const networkPrivacy: PageContent = {
  route: '/network-privacy',
  title: 'Sekme bazlı VPN ve Tor — Tepegöz',
  description:
    'Bir sekmeyi, bir grubu ya da profilin tamamını kendi WireGuard tüneline veya Tor devresine bağlayın; gerçekten kapalı arızalanan bir öldürme anahtarıyla.',
  status: 'needs-assets',

  hero: {
    eyebrow: 'Ağ mahremiyeti',
    headline: 'Tek tarayıcı. Her sekmeye ayrı bir çıkış.',
    subhead:
      'Tarayıcıların çoğunun internete tek bir bağlantısı vardır. Tepegöz’ün ise siz kaç tane tanımlarsanız o kadar vardır — ve her sekme ya da sekme grubu hangisini kullanacağını kendi seçer.',
    ctas: [
      { label: 'Varsayılan olarak başka ne özel', href: '/privacy', variant: 'primary' },
      { label: 'Güvenlik modeli', href: '/security', variant: 'outline' },
    ],
  },

  sections: [
    {
      id: 'why-per-tab',
      eyebrow: 'Neden sekme bazlı',
      heading: 'Sistem genelinde bir VPN kör bir alettir.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Açarsınız ve her şey yerinden oynar: bankanız sizi yabancı bir adresten görmeye başlar, yayın hizmetiniz çalışmaz olur, yerel cihazlarınız kaybolur. Sonra insanlar onu kapatır ve hiçbir şey korunmaz.',
            'Tepegöz bağlamayı, kararın asıl ait olduğu düzeyde yapar. Bir sekmedeki araştırma Tor üzerinden gider. Bir sekme grubundaki iş, şirket tünelinden geçer. Bankanız ait olduğu yerde, doğrudan bağlantıda kalır. Hepsi aynı anda, aynı pencerede.',
            '**Üç kapsam, en özel olan kazanır:** önce sekmenin kendi geçersiz kılması, sonra grubunun bağlaması, sonra profil varsayılanı, sonra Doğrudan. Bir gruba sürüklenen sekme, kendine ait bir rotası yoksa o grubun rotasını benimser.',
          ],
        },
        {
          kind: 'assetPlaceholder',
          label: 'Şema: üç sekme, üç çıkış',
          note: 'Tek bir penceredeki üç sekme — biri şirketin WireGuard tünelinden, biri VPN üzerinden Tor’a zincirlenmiş hâlde, biri açıkça Doğrudan olarak işaretli. Ürün, sekme düzeyindeki bu inceliktir; şema da onu çizer.',
        },
      ],
    },

    {
      id: 'supported',
      eyebrow: 'Neyi destekliyor',
      heading: 'Gerçek tüneller, paketlenmiş hiçbir şey yok.',
      blocks: [
        {
          kind: 'table',
          caption: 'Ağ mahremiyeti yetenekleri ve durumları',
          head: ['Yetenek', 'Durum'],
          rows: [
            ['WireGuard, kullanıcı alanında', 'Mevcut'],
            ['Tor', 'Mevcut'],
            ['VPN üzerinden Tor, zincirlenmiş', 'Mevcut'],
            ['Sekme bazlı bağlama', 'Mevcut'],
            ['Grup bazlı bağlama', 'Mevcut'],
            ['Profil geneli varsayılan', 'Mevcut'],
            ['Aynı anda birden çok tünel', 'Mevcut'],
            ['Kapalı-arıza öldürme anahtarı', 'Mevcut'],
            ['OpenVPN', 'Planlanıyor'],
            ['Yönetilen çıkış düğümleri', 'Yalnızca talep olursa'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Hiçbir şey paketlenmez ve hiçbiri yönetici hakkı istemez.',
          body: [
            'Tepegöz bir VPN dağıtmaz, birini yeniden satmaz ve çıkış düğümü işletmez. Zaten güvendiğiniz bir sağlayıcıdan bir yapılandırma getirirsiniz — ya da hiç getirmezsiniz, çünkü varsayılan Doğrudan’dır.',
          ],
        },
      ],
    },

    {
      id: 'kill-switch',
      eyebrow: 'Öldürme anahtarı',
      heading: 'Arızalandığında trafiği geçiren bir öldürme anahtarı, hiç olmamasından kötüdür.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Çünkü izlemeyi bırakırsınız. Tepegöz’de bir tünel, o bağlantının yerel uç noktasına yöneltilmiş ayrı bir oturum bölümü olarak gerçeklenir. Tünel öldüğünde o bölümdeki istekler **başarısız olur**. Devralınacak bir yedek yol yoktur, dolayısıyla dönülecek bir şey de yoktur. Sekmenin rozeti adı konmuş bir uyarı durumuna geçer — yalnızca renkle değil, sözcüklerle — ve bağlantı düşmüş olarak işaretlenir.',
            'Canlı bir sekmeyi başka bir rotaya almak, yapısı gereği bölünmezdir: eski görünüm, yerine geçecek olan var olmadan önce yok edilir; yani bir isteğin eski yola kaçabileceği bir aralık yoktur. Bunun bedeli, yeniden bağlamanın sekmeyi yeniden yüklemesidir ve tarayıcı bunu siz tıklamadan önce söyler.',
          ],
        },
        {
          kind: 'callout',
          tone: 'success',
          title: 'İki özellik de yapılmış uygulamaya karşı uçtan uca doğrulanır.',
          body: [
            `Denetim, canlı bir uç noktayı öldürür ve erişilebilir olduğu kanıtlanmış açık bir yolun hiçbir şey kaydetmediğini doğrular. Kapatamadığı artık risk [üstü örtülmek yerine belgelenir](${REPO_FILES.knownIssues}).`,
          ],
        },
      ],
    },

    {
      id: 'dns',
      eyebrow: 'DNS',
      heading: 'DNS sızdıran bir tünel, sağlayıcınıza girdiğiniz her siteyi söyler.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Üstelik siz gizli olduğunuza inanırken. Tünele bağlı bir bölümün içinde makine adları **yerelde değil, vekil sunucu tarafından** çözülür — SOCKS uç noktası makine adının kendisini alır ve bunu taşıyamayan eski protokol sürümü reddedilir.',
            'Dürüstçe söylemek gerekirse: tarayıcı düzeyindeki ön getirme bölüm bazında bastırılır, ama Chromium’un tahmin edicisi ve DNS-over-HTTPS oturum bazında değil süreç genelinde çalışır. Bu artık risk üstü örtülmek yerine belgelenmiştir.',
          ],
        },
      ],
    },

    {
      id: 'limits',
      eyebrow: 'Bunun yapmadıkları',
      heading: 'Ağ adresinizi gizler. Tarayıcınızı gizlemez.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Parmak izine direnç henüz yazılmadı. Bir sekmeyi Tor üzerinden yönlendirirken canvas karmanız, yazı tipi listeniz ve donanım imzanız benzersiz kalıyorsa, elinize mahremiyetin töreni geçer, özü değil. O iş planlanıyor ve kapısı, yayımlanacak bir öncesi-sonrası entropi ölçümü — o gelene kadar bu sayfa bunu söylemeye devam edecek.',
            'Ayrıca yazdıklarınıza da yardımcı olamaz. Bir hesaba tünel üzerinden giriş yapmak, sizi o hesaba tanıtır.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Varsayılan olarak özel, kenarları konusunda dürüst.',
    ctas: [
      { label: 'Varsayılan olarak başka ne özel', href: '/privacy', variant: 'primary' },
      { label: 'Özellik listesinde görün', href: '/features', variant: 'outline' },
    ],
  },
};
