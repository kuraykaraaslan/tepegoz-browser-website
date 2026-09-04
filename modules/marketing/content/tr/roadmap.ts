import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';
import {
  KNOWN_ISSUES,
  KNOWN_ISSUES_HEAD,
  KNOWN_ISSUE_COLUMNS,
} from '../en/known-issues.generated';

/**
 * Source: tepegoz-browser/docs/website/roadmap.md (status: ready)
 * @sourceSha256 5508c7ac (2026-09-02)
 *
 * Türkçe çeviri. Kaynak `../en/roadmap.ts`.
 *
 * Bilinen sorunlar tablosu bilerek İngilizce kalır ve `../en/` altındaki
 * ÜRETİLMİŞ modülden içe aktarılır. Bunlar ürün deposunda İngilizce yazılmış
 * mühendislik cümleleridir ve tablo, üretecin kendi başlığında da söylediği
 * gibi, bir insanın çevirmesi gereken bir metindir; bir üretecin çeviremeyeceği
 * bir karardır. Elle çevrilmiş bir kopya ise ilk yukarı akış düzenlemesinde
 * sessizce bayatlar — bu sayfanın tamamı, tam olarak bu tür sessiz bayatlamaya
 * karşı yazılmıştır. Bu yüzden aşağıdaki çerçeveleyen metin, tablonun neden
 * İngilizce olduğunu okura açıkça söyler.
 */
export const roadmap: PageContent = {
  route: '/roadmap',
  title: 'Yol haritası ve dürüst durum — Tepegöz',
  description:
    'Neyin yazıldığı, neyin yazılıp kanıtlanmadığı ve neyin henüz var olmadığı. Hiçbir faz bitmiş sayılmadı; çünkü hiçbiri kendi ölçüsünü karşılamadı.',
  status: 'ready',

  hero: {
    eyebrow: 'Yol haritası',
    headline: 'Burada hiçbir şey bitmiş olarak işaretli değil. Bu bir alçakgönüllülük değil.',
    subhead:
      'Bir faz ancak bitmişlik tanımını geçtiğinde **ve** sonuç bir ölçüm olarak kaydedildiğinde kapanır. Bu kurala göre bu projenin her fazı hâlâ açıktır — ve bunu söylemek, bir sıra yeşil tikten size daha çok yarar sağlar.',
  },

  sections: [
    {
      id: 'states',
      eyebrow: 'Üç durum',
      heading: 'Yol haritalarının çoğunda iki durum vardır. Önemli olan üçüncüsüdür.',
      blocks: [
        {
          kind: 'cards',
          columns: 3,
          items: [
            {
              title: 'Yazıldı ve kanıtlandı',
              body: 'Kod mevcut ve davranışı ölçüldü ya da baştan sona test edilebilecek kadar belirlenimci.',
            },
            {
              title: 'Yazıldı, kanıtlanmadı',
              body: 'Kod mevcut, yalıtılmış olarak test edildi ve gerçek dünyadaki etkinliği hiç ölçülmedi. **Ajanın bugün büyük bölümü burada yaşıyor.**',
            },
            {
              title: 'Yazılmadı',
              body: 'Planda anlatıldı, üründe yok.',
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            'Dürüst olan ikinci kategoridir ve her rakibin pazarlamasından kaybolan da odur.',
          ],
        },
      ],
    },

    {
      id: 'works',
      eyebrow: 'Yazıldı ve kanıtlandı',
      heading: 'Bugün çalışanlar.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            'Eksiksiz bir tarayıcı kabuğu: sekmeler ve gruplar, yer imleri, geçmiş, karantinalı indirmeler, yüklemeler, sayfada bul, profiller, belirlenimci bir adres çubuğu',
            'Uçtan uca ajan: hedefin devredildiği konsol, canlı adım akışı, çalışma zamanı, araç düzlemi, tarayıcı araçları — dört bulut sağlayıcısı ve tamamen çevrimdışı yerel çıkarımla',
            'Güvenlik çekirdeği: politika sınıflandırması, risk katmanları, plan kapsamlı izinler, döngüde insan, kimlik bilgisi kasası ve aracısı, çıkış güvenlik duvarı, istem enjeksiyonu taraması, olay günlüğü',
            '**Gerçek tünellerle** ağ mahremiyeti: kullanıcı alanında WireGuard ve Tor, VPN üzerinden zincirlenmiş Tor, sekme ve grup bazlı bağlama ve yapılmış uygulamaya karşı uçtan uca doğrulanmış kapalı-arıza öldürme anahtarı',
            'Dokuz birinci taraf uzantı ve bir MCP istemcisi',
            'Tam eşitlikte İngilizce ve Türkçe, kendine ait bir Türkçe klavye hattıyla',
            'Bağımsız bir koşu kanıtı doğrulayıcısı olan `tepegoz-verify`',
          ],
        },
      ],
    },

    {
      id: 'unproven',
      eyebrow: 'Yazıldı, kanıtlanmadı',
      heading: 'Ajan yetkinliği programının tamamı.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'On üç faz; hepsinin yetenek kodu yazıldı, hepsi hâlâ bir ölçüm borçlu.',
          body: [
            'Kıyaslama protokolü yazıldı ve önceden kaydedildi — iddianın, yeniden üretilmeyi bıraktığı anda öleceğini söyleyen geri çekme maddesi dâhil — ve koşuların parası ödenmedi.',
          ],
        },
        {
          kind: 'capability',
          groups: [
            {
              state: 'measurement-owed',
              items: [
                'Koşu kanıtı noterlemesi',
                'İşlem yetkileri',
                'Doğrulanabilir politika paketleri',
                'Yönetişimli ajan uç noktaları',
                'Tarif derleyicisi',
                'Türkçe kamu hizmeti sınıflandırıcısı',
                'Tedarik zinciri kapısı',
              ],
            },
            {
              state: 'frozen',
              label: 'Bilerek durduruldu',
              items: [
                'Üç yetenek **bilerek kapalı** dağıtılıyor',
                'Bir faz, başarısızlığın etrafından sessizce yeniden tasarlamak yerine **kendi özgün tasarımının ölçülmüş bir çürütmesini** kaydediyor',
              ],
            },
          ],
        },
        {
          kind: 'prose',
          body: [
            'İlk gruptaki her kalem, yazılmış, incelenmiş, belgelenmiş ve **henüz canlı bir çağrıya bağlanmamış** bir karar katmanıdır. İkincideki her kalem bir kusur değil bir karardır — ve iki grup da çalışıyor olmakla aynı şey değildir.',
          ],
        },
      ],
    },

    {
      id: 'not-built',
      eyebrow: 'Yazılmadı',
      heading: 'Planda anlatıldı, üründe yok.',
      blocks: [
        {
          kind: 'capability',
          groups: [
            {
              state: 'planned',
              items: [
                'Paralel çok sekmeli yürütme',
                'Kalıcı kontrol noktası, sürdürme ve ajanlar arası devir',
                'Uzun vadeli görev belleği',
                'Resmî API tümleşim bağdaştırıcıları',
                'Google Safe Browsing',
                'Bir MCP **sunucusu** yüzeyi',
              ],
            },
            {
              state: 'planned',
              items: [
                'Parmak izine direnç',
                'Chrome MV3 uzantı desteği',
                'İsteğe bağlı yönetilen bulut katmanı ve şifreli eşitleme',
                'Birinci sınıf hedef olarak macOS ve Linux',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'blockers',
      eyebrow: 'Engeller',
      heading: '"Finansman lazım" diye toplanmadan, türüne göre adlandırıldı.',
      blocks: [
        {
          kind: 'table',
          caption: 'Engellenen her kalemin gerçekte neye ihtiyacı var',
          head: ['Engel', 'Gerçekte neye ihtiyacı var'],
          rows: [
            ['Ajan kıyaslama temel çizgisi', '**API harcaması** — tam tarama için yaklaşık 550–780 $'],
            ['Karşılaştırmalı ölçüm', 'API kredisi değil, **rakip abonelikleri**: ayda yaklaşık 60 $'],
            ['Yerel model fazı', 'Jeton değil, **indirilmiş model ağırlıkları**'],
            ['Bağımsız güvenlik denetimi', '**Dışarıdan bir inceleyici** ve bunun bütçesi'],
            ['Faz 0’ın kapanması', 'İzlenen bir CI koşusu ve takımın en az bir kez macOS üzerinde çalışması'],
          ],
        },
      ],
    },

    {
      id: 'known-issues',
      eyebrow: 'Bilinen sorunlar',
      heading: 'Şu anda neyin bozuk olduğu, deponun kendi sözleriyle.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu tablo doğrudan ürün deposundaki `docs/known-issues.md` dosyasından üretilir — geliştiricilerin okuduğu dosyanın aynısı. Web sitesi için özetlenmez, yumuşatılmaz ya da yeniden sıralanmaz ve buradaki bir satır depoyla çelişirse, güvenilecek olan depodur.',
            'Tablonun kendisi **İngilizce kalır**. Bunlar yukarı akışta İngilizce yazılmış mühendislik cümleleridir; elle çevrilmiş bir kopya ise ilk yukarı akış düzenlemesinde sessizce bayatlar ve o zaman size, artık kimsenin okumadığı bir arıza listesini gösteriyor oluruz. Kendi dilinde bir kusur listesi, doğru olmayan bir kusur listesinden daha az işe yarar.',
          ],
        },
        {
          kind: 'table',
          caption: 'Depodan üretilmiş bilinen sorunlar ve geçici çözümleri',
          head: [...KNOWN_ISSUES_HEAD],
          rows: KNOWN_ISSUES.map((issue) => KNOWN_ISSUE_COLUMNS.map((column) => issue[column])),
        },
        {
          kind: 'ctas',
          items: [
            {
              label: 'Depodaki tam liste',
              href: REPO_FILES.knownIssues,
              variant: 'outline',
              external: true,
            },
          ],
        },
      ],
    },

    {
      id: 'why-publish',
      eyebrow: 'Bunu neden yayımlıyoruz',
      heading: 'Çünkü alternatifi, kimsenin yeniden üretemeyeceği bir sayıdır.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Ve bu kategoride böyle sayılardan zaten birkaç tane var.',
            'Ajanlı bir tarayıcı alışılmadık ölçüde büyük bir söz verir: sizin için, önemli sayfalarda davranabileceğini söyler. Bu sözü vermenin tek sorumlu yolu, hangi kısımların gösterildiği, hangilerinin yalnızca yazıldığı ve hangilerinin hâlâ bir plandaki bir cümle olduğu konusunda açık olmaktır.',
            `Hepsi depoda, faz faz, kanıtıyla ya da kanıtının yokluğuyla birlikte tutulur: [faz dizini](${REPO_FILES.phases}) · [bilinen sorunlar](${REPO_FILES.knownIssues}) · [değişiklik günlüğü](${REPO_FILES.changelog})`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Bir eksiği kapatmaya yardım edin.',
    ctas: [
      { label: 'Tepegöz’ü edinin', href: '/download', variant: 'primary' },
      { label: 'Bir eksiği kapatmaya yardım edin', href: '/open-source', variant: 'outline' },
      { label: 'Açık konular', href: SITE.repoIssues, variant: 'ghost', external: true },
    ],
  },
};
