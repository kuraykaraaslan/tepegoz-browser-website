import type { PageContent } from '@/types/content';

/**
 * Source: tepegoz-browser/docs/website/legal-terms.md
 * @sourceSha256 458bb6b3 (2026-08-23)
 * (status: draft-legal — TASLAK, HUKUKİ TAVSİYE DEĞİLDİR, OLDUĞU GİBİ GÜVENİLMEZ)
 *
 * Türkçe çeviri. Kaynak `../en/legal-terms.ts`.
 *
 * Kaynağın bir inceleyiciden korunmasını istediği yapısal nokta, bir düzenleme
 * sessizce yitirmesin diye burada da yineleniyor: **yazılım bu koşullarla
 * lisanslanmaz.** AGPL-3.0 ile lisanslanır ve bu koşullar, onun üstüne kısıtlama
 * ekliyormuş gibi görünmemelidir.
 *
 * `{{PLACEHOLDER}}` belirteçleri çevrilmez; iki dilde de aynı belirteçtir.
 */
export const legalTerms: PageContent = {
  route: '/legal/terms',
  title: 'Koşullar — Tepegöz',
  description:
    'Bu web sitesini kapsayan koşullar. Tepegöz yazılımının kendisi, bir abonelik değil bir lisans olan AGPL-3.0 ile yönetilir.',
  status: 'draft-legal',

  hero: {
    eyebrow: 'Hukuki',
    headline: 'Koşullar',
    subhead:
      'Bu koşullar {{SITE_DOMAIN}} adresini — bu web sitesini — yönetir. Tepegöz yazılımını yönetmez. Son güncelleme: {{DATE}}.',
  },

  sections: [
    {
      id: 'scope',
      heading: '1. Bu koşullar neyi kapsar',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: 'Tepegöz yazılımını yönetmezler.',
          body: [
            'Tepegöz, **GNU Affero General Public License v3.0** ile lisanslanmış özgür yazılımdır. Onu kullanma, inceleme, değiştirme ve yeniden dağıtma haklarınız o lisanstan gelir, bu sayfadaki hiçbir şeyden değil. Bu koşullar ile AGPL-3.0 arasında bir çelişki okunabilecekse, yazılım bakımından **AGPL-3.0 geçerlidir**.',
          ],
        },
      ],
    },

    {
      id: 'website',
      heading: '2. Web sitesi',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Site olduğu gibi sunulur. Doğru ve erişilebilir tutmaya çalışırız ve ikisinin de sözünü vermeyiz. İçerik bildirimde bulunulmadan değişebilir.',
            'Siteyi yasaları çiğnemek, üzerinde çalıştığı altyapıya saldırmak ya da hak sahibi olmadığınız sistemlere veya verilere erişmeye çalışmak için kullanamazsınız. **Tepegöz yazılımı üzerinde iyi niyetli güvenlik araştırması açıkça memnuniyetle karşılanır** ve projenin güvenlik politikasındaki güvenli liman koşullarıyla yönetilir — bkz. [/security](/security).',
          ],
        },
      ],
    },

    {
      id: 'software',
      heading: '3. Özetle yazılım',
      lede: 'Tamamını [/legal/license](/legal/license) sayfasında okuyun. Çoğu kişinin ihtiyaç duyduğu kısımlar:',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            'Tepegöz **ücretsizdir**. Abonelik yoktur, hesap yoktur ve bu sitedeki hiçbir şey size tarayıcıyı satmaz.',
            '**Ön sürüm yazılımdır.** Yapılar imzalıdır, ama bağımsız bir güvenlik denetimi yapılmamıştır ve otomasyon bağımsız olarak kıyaslanmamıştır.',
            'AGPL-3.0 garantileri reddeder ve sorumluluğu sınırlar. **Yazılım hiçbir tür garanti verilmeksizin sunulur**; buna satılabilirlik ve belirli bir amaca uygunluk da dâhildir.',
            '**Destek yükümlülüğü yoktur.** Konular ve güvenlik bildirimleri kapasite elverdiğince okunur ve ele alınır; bu sitedeki hiçbir şey bir hizmet düzeyi taahhüdü değildir.',
          ],
        },
      ],
    },

    {
      id: 'responsibility',
      heading: '4. Onu çalıştırdığınızda neyden sorumlusunuz',
      lede: 'Tepegöz, sizin hesaplarınızı ve kimlik bilgilerinizi kullanarak, sizin adınıza web sitelerinde davranabilir.',
      blocks: [
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Ona ne yapmasını söylediğinizden siz sorumlusunuz**; buna otomatikleştirdiğiniz web sitelerinin koşullarına uymak da dâhildir. Pek çok hizmet otomatik erişimi kısıtlar; o sözleşme sizinle onlar arasındadır.',
            '**Kendi yapay zekâ sağlayıcı anahtarınızı getirirsiniz** ve o sağlayıcıyı kullanmanız onların koşullarıyla yönetilir. Ajanın gönderdiği içerik doğrudan o sağlayıcıya gider. Biz buna taraf değiliz ve göremeyiz.',
            '**Otomasyon, paranızı harcamak dâhil geri alınamaz sonuçlara yol açabilir.** Hassas kategoriler ve cüzdan yetkileri kapalı gelir ve yalnızca sizin tarafınızdan açılır; bir kez açıldığında ajan bunların içinde tekrar sormadan davranır. Kaldırabileceğiniz bir tavan, bir alıcı listesi ve bir son kullanma tarihi belirlemek sizin sorumluluğunuzdur ve bu güvenceler bir teminat değildir. Muhakeme sizde kalır.',
            '**Hukuka aykırı hiçbir şey için kullanmayın** ve yetkili olmadığınız sistemlere ya da verilere ulaşmak için kullanmayın.',
            '**Otomatik erişim — insan doğrulama engellerinin otomatik geçilmesi dâhil — sizin kararınız ve sorumluluğunuzdur.** Pek çok hizmet bunu kendi koşullarında kısıtlar ya da yasaklar. Yazılım, sizin açtığınızı yapar; buna izinli olup olmadığınız sizinle site arasındadır.',
          ],
        },
      ],
    },

    {
      id: 'trademarks',
      heading: '5. Ticari markalar',
      blocks: [
        {
          kind: 'prose',
          body: [
            'AGPL-3.0 telif hakkı izinleri verir; ticari marka hakkı vermez. **Tepegöz** adı, kelime markası ve logosu {{TRADEMARK_HOLDER}} adına kalır.',
            'Adı projeye atıfta bulunmak için kullanabilirsiniz — neyden türetildiğini doğru biçimde belirtmek üzere bir çatalın belgelerinde de. Adı ya da logoyu, değiştirilmiş sürümünüzün resmî olduğunu veya bizim tarafımızdan onaylandığını düşündürecek biçimde kullanamazsınız. Emin değilseniz sorun; yanıt genelde evettir.',
          ],
        },
      ],
    },

    {
      id: 'links',
      heading: '6. Üçüncü taraf bağlantıları',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Site, kaynak kod barındırma ve araştırma kaynakları dâhil üçüncü taraf sitelere bağlantı verir. Bunları denetlemiyoruz ve içeriklerinden ya da mahremiyet uygulamalarından sorumlu değiliz.',
          ],
        },
      ],
    },

    {
      id: 'law',
      heading: '7. Uygulanacak hukuk',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu koşullar {{JURISDICTION}} hukukuna tabidir ve {{VENUE}} mahkemeleri yetkilidir — yaşadığınız yerde sahip olduğunuz emredici tüketici haklarını sınırlamaksızın.',
          ],
        },
      ],
    },

    {
      id: 'changes',
      heading: '8. Değişiklikler',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bu koşullar değişebilir. Yürürlükteki sürüm her zaman bu sayfadaki, "son güncelleme" tarihini taşıyan sürümdür.',
          ],
        },
      ],
    },

    {
      id: 'contact',
      heading: '9. İletişim',
      blocks: [{ kind: 'prose', body: ['{{CONTACT_EMAIL}}'] }],
    },
  ],

  closing: {
    heading: 'Asıl önemli belge lisanstır.',
    ctas: [
      { label: 'Lisansı okuyun', href: '/legal/license', variant: 'primary' },
      { label: 'Web sitesi gizlilik politikası', href: '/legal/privacy', variant: 'outline' },
    ],
  },
};
