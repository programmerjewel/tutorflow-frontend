import React from 'react';
import englishLogo from '../../../src/assets/icons/englishtutor.svg'
import spanishLogo from '../../../src/assets/icons/spansihtutor.svg'
import frenchLogo from '../../../src/assets/icons/frenchtutor.svg'
import germanLogo from '../../../src/assets/icons/germantutor.svg'
import italianLogo from '../../../src/assets/icons/italiantutor.svg'
import chineseLogo from '../../../src/assets/icons/chinesetutor.svg'
import arabicLogo from '../../../src/assets/icons/arabictutor.svg'
import japaneseLogo from '../../../src/assets/icons/japanesetutor.svg'
import portugeseLogo from '../../../src/assets/icons/portugesetutor.svg'



const LanguageCategory = () => {

  const categories = [
    { title: "English tutors", logo: englishLogo,  path: "english" },
    { title: "Spanish tutors", logo: spanishLogo,  path: "spanish" },
    { title: "French tutors", logo: frenchLogo, path: "french" },
    { title: "German tutors", logo: germanLogo, path: "german" },
    { title: "Italian tutors", logo: italianLogo,  path: "italian" },
    { title: "Chinese tutors", logo: chineseLogo,  path: "chinese" },
    { title: "Arabic tutors", logo: arabicLogo, path: "arabic" },
    { title: "Japanese tutors", logo: japaneseLogo, path: "japanese" },
    { title: "Portuguese tutors", logo: portugeseLogo, path: "portuguese" },
  ];
  
  return (
    <section>
      <h2 className='font-extrabold text-4xl text-violet-600'>Explore Tutors by Language</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {
          categories.map((category, index)=>(
            <div key={index} className='border border-gray-200 p-3 rounded-sm'>
              <img src={category.logo} className='' alt="" />
              <div>
                <h3>{category.title}</h3>
              </div>
              <span className=''>➔</span>
            </div>
        ))
        }
      </div>
    </section>
  );
};

export default LanguageCategory;