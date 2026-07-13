import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Fantasticlean-Microfiber-Cleaning-Reusable-Washable/dp/B0B27JSN71?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=a7a561d0c42ee8f15a017f46f7ad2c62&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MoLKENE-Swedish-Dish-Cloths-Dishcloths/dp/B0B9S9SJQB?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=1cb897100c2da9728f7f027958b79ac2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FEBU-Dishcloths-Watercolor-Cellulose-Biodegradable/dp/B09JPC3688?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=9f706d02fafd8b9e8797c59a0144c1bc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AIDEA-Microfiber-Automotive-Workshops-Kitchen-11%C3%979/dp/B0D1KFJSVX?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=464120417dfe8aad05dfe5080aeb87bd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Eulnars-Non-Scratch-Reusable-Paper-Biodegradable/dp/B0CCVXNQBF?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=03d07ed8153467c06ff7d4e2743ed65a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Puomue-Microfiber-Cleaning-Reusable-Absorbent/dp/B0F4QGMPP8?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=861e7d4d8bbb4653d3b352913ba38a8a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Zeawec-3-Piece-Bamboo-Cutting-Kitchen/dp/B0GFCZTRKL?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=0061fedc0d3e366f79d39938983c7182&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Astercook-Deep-Carbonized-Reversible-Charcuterie-Easy-Grip/dp/B0FH6YL3XC?&linkCode=ll2&tag=greenkitchenh-20&linkId=cd1cbb3b4b5da28fb8457050b032a479&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Freshware-BC-200PK-Eco-Friendly-Chopping-Vegetables/dp/B016OP6N3M?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=37cbc17e8084c4e05e643ce3b3658337&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/ROYAL-CRAFT-WOOD-Cutting-Kitchen/dp/B0D2P1HSCV?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=aa93be72bec4d1064d8ea8038ca6111f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bamboo-Cutting-Kitchen-Chopping-Kikcoin/dp/B0CC8SZRT3?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=58a4652954fb4ccf04564ac01c61654a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cutting-Durable-Charcuterie-Chopping-Vegetables/dp/B0D7M8QB9Y?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=bd6719ba25f60cf8ca3d2f6581d4c135&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Acnusik-Stainless-Steel-Flatware-Set/dp/B08B39ZH5M?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=ac27999be3893100082254602a986638&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KINGSTONE-Stainless-Silverware-Tableware-Restaurant/dp/B091SRKPN7?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=275f14dbb30e4f076538fd5692c0686c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PHILIPALA-20-Piece-Silverware-Flatware-Dishwasher/dp/B0DKTX3H1H?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=11fc96e75b84fc84b35c1b558485a0e7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Silverware-Food-Grade-Stainless-Tableware-Restaurant/dp/B0BYX1XT81?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=f594deebcbb588b33433b29b8f801bc7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Stapava-Silverware-Food-Grade-Dishwasher-Restaurant/dp/B0FMDR8HPB?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=ba5c52f14d0fdbc29505b3a5b0a74ce7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Knives-Stainless-Serrated-Dishwasher-Elegant/dp/B09Y8WF8WQ?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=49f8a49dd049444502c0dfc9261192d4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Rubbermaid-Brilliance-Storage-Containers-Pieces/dp/B08BR9HBZ3?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=7bfca459b42eb4e24a9f4b048be43e4c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vtopmart-Containers-Airtight-Microwave-Dishwasher/dp/B0D7P6XKNP?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=0e969d9214d04dcf91935f9bca4b3022&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Liuruiyu-Containers-Airtight-Microwave-Dishwasher/dp/B0F9K2KXZV?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=f3c140e9c794ffb8c5b6743a3e80d0e8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vtopmart-Containers-Airtight-Microwave-Dishwasher/dp/B0B9S5HZ26?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=c2d9a7c0aa5a9dce028bed23294ee3c6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HOMBERKING-Storage-Containers-Airtight-Kitchen/dp/B0DWLHPM8Q?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=aab68f96c169f14473c8c38cfe25b6a2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KOMUEE-Containers-Airtight-Microwave-Dishwasher/dp/B08X4615SC?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=87665c96d0935aedf996fe1ee1829640&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Umite-Chef-Utensils-Non-stick-Resistant/dp/B08573DQ39?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=92b9fac9162446559ccac78d9b6fe20e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utensils-Resistant-Silicone-Nonstick-Cookware/dp/B094PTSRP9?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=b2f97822477f73e7be3985773a83fb42&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NileHome-Silicone-Utensils-Resistant-BPA-free/dp/B0B7J62MV9?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=68f38407f6bfe2a7ad77239d833c1443&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CAROTE-Silicone-Utensils-Resistant-Non-Stick/dp/B0C9DNCFG2?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=b4d7bca89ea94b3c43988fac77b07b96&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Astercook-Utensils-Silicone-Resistant-Nonstick/dp/B0F23QPVVG?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=1892baa695b7fea41d1298a84174d280&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Silicone-Cooking-Utensils-Whisk-Kitchen-Cookware-Dishwasher/dp/B088DGBRMC?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=7533e7cfcd5a563fd2585133173c579d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOPDesign-Economical-Lightweight-Advertising-Promotion/dp/B082CZHQZ3?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=f1902bca9b8ee3c7a9b025d5959a1ad4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOPDesign-Stylish-External-Closure-Essentials/dp/B083DH7MNG?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=e242124fb68e9fdb8903403a2f79fe62&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BALEINE-Reusable-Grocery-Shopping-Reinforced/dp/B094X266WR?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=b9564bfb5672054e81f23feb3cebbb93&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NPBAG-Natural-Cotton-Blank-Teflon/dp/B08MXMK3S9?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=a57057496a18a28935592170285a797b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Nanobag-Ultralight-Foldable-Collapsible-Essential/dp/B0D5J5XD6Q?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=dcba649930e0e8335de83de8a88ecda8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BALEINE-Insulated-Reusable-Collapsible-Groceries/dp/B0B38GQPGF?th=1&linkCode=ll2&tag=greenkitchenh-20&linkId=c1254aae8c70aca9c37328a1a7e64feb&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'grey'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

