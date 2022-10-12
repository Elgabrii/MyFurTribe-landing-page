import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from 'next/image'

const Vision = () => {
  return (
    <Box p={5} borderRadius={8} sx={{ boxShadow: '0px 4px 20px rgba(28, 27, 52, 0.1);'}}>
      <Typography variant='h3' color='primary' align="center" fontWeight='600' mb={4}>
        MyFurTribe - Simplyfing Pet Nutrition
      </Typography>
      <Box display='flex' flexDirection='row' justifyContent='space-around' width='100%'>
        <Typography variant='body1' fontWeight='600' flexBasis={0} flexGrow={2}>
          &quote;Nutrition Pro was born out of my immense struggle to sort through the labyrinth of online pet nutrition noise years ago, when I decided to feed my dog a homemade diet. It seemed like everyone on earth had an opinion on the topic, and I had no idea who to listen to. It took me years to undertand the inner workings of how to properly formulate a nutritionally balanced diet.
          <br/>
          <br/>
          There was a tremendous lack of understanding from pet owners around nutrition and certification. Most of those interested in a homemade diet were avoiding nutritionist consultations and instead opting to buy online recipes, almost all of which were nutritionally imbalanced and far too rigid to follow long-term. Too many well-intentioned people’s pets were being harmed due to simple lack of understanding.
          <br/>
          <br/>
          I decided then to make it my mission to share what I&apos;d learned over the years by combining great tech talent with knowledge from leading veterinary nutritionists, and founding MyFurTribe. Together we’ve developed an app that is a powerful solution to this problem, yet is simple enough for any pet owner to use. Every feature in Nutrition Pro is designed with pet parents like myself in mind - from the recipe cost estimate, to the &quot;Substitute&quote; button, to the product links and beyond. We&apos;re very proud to have created the most flexible and powerful homemade nutrition tool anywhere, and I can think of nothing more rewarding than helping great pet parents feed nutritionally balanced fresh food diets.&quote;
        </Typography>
        <Box>
          <Image src='/petfamily.png' width={475} height={518} alt='pet-picture'/>
        </Box>
      </Box>
      <Box display='flex' width='100%' justifyContent='center' alignItems='center'>
        <Box display='flex' flexBasis={0} flexGrow={0.5} alignItems='center'>
          <Image src='/sophie-dog.png' width={220} height={220} alt='dog'/>
          <Typography fontSize='22px' fontWeight={700} color='primary' ml={2}>
            Thank you to Sophie for inspiring the creation of MFT.
          </Typography>
        </Box>
        <Box flexDirection='column' justifyContent='center' alignItems='center'>
        <Image src='/signature.png' width={400} height={80} alt='signature'/>
          <Typography variant='h5' fontWeight={600} color='primary' align='center' sx={{position: 'relative', bottom: 30}}>
            Founder & CEO 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Vision