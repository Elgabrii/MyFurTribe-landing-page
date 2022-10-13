const { Typography } = require("@mui/material");
const { Box } = require("@mui/system");
import FAQ from './FAQ';
const FAQs = ({ isMobile }) => (
  <Box py={isMobile ? 3 : 8} px={ isMobile? 2 : 30} sx={{ backgroundColor: '#F9FAFB'}} width='100%'>
    <Typography variant={ isMobile ? 'h5' : 'h3'} fontSize={isMobile ? '24px' : '42px'} fontWeight={700} color='primary' align='center'>
      Frequently Asked Questions
    </Typography>
    <Box mt={isMobile? 2 : 10}>
      <FAQ 
        question="What if my pet doesn't like the recipe I made?"
        answer="You can easily swap recipe ingredients with our “Substitute” button, or re-take the Nutrition Pro Assessment as many times as you’d like. Create endless nutritionally balanced recipes, all tailored specifically to your pet’s activity level and life stage needs."
        open
      />
      <FAQ 
        question="How do I know that the recipe I created is nutritionally complete & balanced?"
        answer="You can easily swap recipe ingredients with our “Substitute” button, or re-take the Nutrition Pro Assessment as many times as you’d like. Create endless nutritionally balanced recipes, all tailored specifically to your pet’s activity level and life stage needs."
      />
      <FAQ 
        question="What happens when my pet grows into the next life stage? How will I know?"
        answer="You can easily swap recipe ingredients with our “Substitute” button, or re-take the Nutrition Pro Assessment as many times as you’d like. Create endless nutritionally balanced recipes, all tailored specifically to your pet’s activity level and life stage needs."
      />
      <FAQ 
        question="What if I want to keep feeding dry/wet food?"
        answer="You can easily swap recipe ingredients with our “Substitute” button, or re-take the Nutrition Pro Assessment as many times as you’d like. Create endless nutritionally balanced recipes, all tailored specifically to your pet’s activity level and life stage needs."
      />
      <FAQ 
        question="Do you make and ship the recipes? "
        answer="You can easily swap recipe ingredients with our “Substitute” button, or re-take the Nutrition Pro Assessment as many times as you’d like. Create endless nutritionally balanced recipes, all tailored specifically to your pet’s activity level and life stage needs."
      />
    </Box>
  </Box>
)

export default FAQs