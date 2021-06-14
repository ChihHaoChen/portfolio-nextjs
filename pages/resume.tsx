import { experiences, highlySkills, devSkills, education } from '../data'
import { GoLocation } from 'react-icons/go'

const showDate = (dateObj) => {
  let year    = dateObj.getFullYear();
  let month   = dateObj.getMonth()+1; 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  
  const dateTime = year+'/'+month   
   return dateTime;
}


const resume = () => {
  return (
    <div className="p-4">
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          {/* // Education */}
          <div>
            <h5 className='my-3 text-2xl font-bold'>Education</h5>
            {
            education.map((educationItem, key) => (
              <div key={key}>
                <h5 className='my-2 text-xl font-bold'>
                  {educationItem.school} 
                </h5>
                <h6 className='my-2 text-xl semi-bold'>
                  {educationItem.program} 
                </h6>
                <div className="flex items-center space-x-2 space-around">
                  <p className='font-semibold'>
                    {showDate(educationItem.dateFrom)} - {showDate(educationItem.dateTo)} |
                  </p>
                  <GoLocation />
                  <span>{educationItem.location}</span>
                </div>
                <div className='my-2'>
                  <p>GPA: {educationItem.gpa} </p>
                </div>
              </div>
            ))
          }
            { /* // Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
              <div>
                <h5 className="my-3 text-2xl font-bold">Languages</h5>
                <ul className="flex-wrap pl-5 my-2 list-disc">
                  {highlySkills.map((skill, i) => (
                    <li>{ skill.name }</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="my-3 text-2xl font-bold">Dev. Skills</h5>
                <ul className="flex-wrap pl-5 my-2 list-disc">
                  {devSkills.map((tool, i) => (
                    <li>{ tool.name }</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* // Experience */}
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          {
            experiences.map((experience, key) => (
              <div key={key}>
                <div className='flex justify-between pr-10'>
                  <h5 className='my-2 text-xl font-bold'>
                    {experience.company}
                  </h5>
                  <h6 className='my-2 text-xl semi-bold'>
                    {experience.title}
                  </h6>
                </div>
                
                <div className="flex items-center space-x-2 space-around">
                  <p className='font-semibold'>
                    {showDate(experience.dateFrom)} - {showDate(experience.dateTo)} |
                  </p>
                  <GoLocation />
                  <span>{experience.location}</span>
                </div>
                
                <ul className='pl-5 list-disc'>
                  {experience.workItems.map(workItem => <li>{ workItem }</li>)}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
     
    </div>
  )
}

export default resume
