import ContactCard from "@/components/ContactCard"
export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <ContactCard name="A B" description="asd" imageUrl="https://media.discordapp.net/attachments/742798911231492136/1344696127512907837/IMG_6069.jpg?ex=67db8e9c&is=67da3d1c&hm=a4259be008e9d0e3bae4528f63d36b4ab2e07e59ce5e2c45a73d8bfe57bbd31b&=&format=webp&width=500&height=666" />
      <ContactCard name="C D" description="fgh" imageUrl="https://media.discordapp.net/attachments/742798911231492136/1330972473898041446/image.png?ex=67dbba76&is=67da68f6&hm=0c32996fc32d94a10a7a313a038351fc14f615318b21721c0c36dffbdc044859&=&format=webp&quality=lossless&width=1114&height=439"/>
      <ContactCard name="E F" description="ghj" imageUrl="https://media.discordapp.net/attachments/742798911231492136/1319323420059631748/image.png?ex=67db896f&is=67da37ef&hm=b205813f86b25abfe30b222632ed028ca83c43d1e4108f5ce45ea4875cfeb50b&=&format=webp&quality=lossless&width=304&height=106"/>
      <ContactCard name="G H" description="bnm" imageUrl="https://media.discordapp.net/attachments/742798911231492136/1314627454597599263/image.png?ex=67db9779&is=67da45f9&hm=f931fc071568def6787efda6d70de75108166d18c27ca4cec3959103027e058c&=&format=webp&quality=lossless&width=1085&height=610"/>
    </div>
  )
}