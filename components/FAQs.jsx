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
        answer="All recipes created by our software meet and exceed AAFCO, FEDIAF, & NRC nutritional standards and you can view the nutritional analysis for any recipe in-app. Our ingredient database is up to date with the latest information from our branded products as well as the USDA."
      />
      <FAQ 
        question="What happens when my pet grows into the next life stage? How will I know?"
        answer="You will receive in-app reminders one month before your pet transitions to their next life stage. In order to provide your pet with the appropriate nutrient standards for their upcoming life stage, you must upgrade their version of Nutrition Pro as they age (ex. young adult to adult)."
      />
      <FAQ 
        question="What if I want to keep feeding dry/wet food?"
        answer="Choose 'Nutrition Pro Diet Topper' when checking out, instead of the standard Nutrition Pro program. Diet Topper is designed for pet parents that can't fully commit to feeding a fresh food diet, but still want to increase their pet's vitality and longevity with nutritious, fresh food toppings."
      />
      <FAQ 
        question="Do you make and ship the recipes? "
        answer="Nutrition Pro's AI will provide you with links to purchase all of your recipe's ingredients, as well as detailed instruction on how to create it. We do not however make or ship pet food."
      />
    </Box>
  </Box>
)

export default FAQs