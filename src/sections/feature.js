/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Marketplace',
    title: '%100 Tamamen Gizli',
    text:
      'X Takip Yazılımımız Yüklendikten sonra kendini gizleme özelliği sayesinde menüde veya her hangi bir yerde  fark edilmesi imkansız.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'Kolay Kurulum Basit Kullanım',
    text:
      'Telefon takip yazılımı tüm cihazlarda sorunsuz olarak çalışmaktadır. İster bilgisayardan, ister mobilden girerek panel üzerinden telefon takip yapabilirsiniz.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Gelişmiş Özellikler',
    text:
      'Telefon izleme yazılımı piyasadaki yazılımlardan farklı olarak çok gelişmiş özelliklere sahiptir. Kurulumu son derece kolay ve paneli kullanıcı dostur.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Cep Telefonu Casus Yazılımı"
          description="Sevdiklerinizi korumaya yardımcı oluyoruz.Kişisel haklarınıza dikkat ediyor, topladığımız verileri belirli periyot ile temizliyor, tercih ettiğiniz formatınıza tek bir tıklamayla dışa aktarabiliyorsunuz."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
