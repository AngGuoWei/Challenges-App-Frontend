const features = [
  {
    title: 'Monthly Code Challenges',
    description: 'Engage in monthly coding challenges to enhance your skills',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" className="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
  
  
  },
  {
    title: 'Video Solutions on Youtube',
    description: 'Assess your skills by watching solution videos on youtube',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
  
  },
  {
    title: 'Personalised Feedback',
    description: 'Receive feedback and suggestions',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
  
  },
  {
    title: 'Learn From Community',
    description: 'Check out submissions in various technologies for collaborative learning',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
  
  },
  {
    title: 'Diverse Programming Tasks',
    description: 'Explore a variety of programming tasks to expand your knowledge',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
  
  },
  {
    title: 'Certificate of Achievement',
    description: 'Earn a Certificate of Achievement upon successful completion of each monthly challenge',
    image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
  
  }

]

const Features = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-bold">Incentives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
          features.map((feature, index) => {
            return (
              <div key={index} className="py-4">
                {feature.image}
                <p className="mt-4 font-medium text-base">{feature.title}</p>
                <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          }
          )
        }
        </div>
      </div>
    </div>
  )

}

export default Features