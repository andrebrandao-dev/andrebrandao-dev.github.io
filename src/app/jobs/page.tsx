import { useJobs } from '@/hooks/use-jobs'
import { Card } from '@/components/card'
import { Pill } from '@/components/pill'
import { LuMapPin, LuBuilding } from 'react-icons/lu'

export default function Jobs() {
  const { jobs } = useJobs()

  return (
    <div className="flex flex-col gap-4">
      {jobs.map(job => (
        <Card key={job.id} title={job.title}>
          <p className="flex items-center gap-2">
            <LuBuilding className="text-cyan-900" />
            {job.company}
          </p>
          <p className="flex items-center gap-2">
            <LuMapPin className="text-cyan-900" />
            {job.location}
          </p>

          <div className="flex gap-2">
            {job.skills?.map(skill => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
          
          <p>{job.description}</p>
          <p>{job.startDate} - {job.endDate}</p>
        </Card>
      ))}
    </div>
  )
}
