const jobs = [
  {
    id: 'job-5',
    title: 'Desenvolvedor Pleno',
    company: 'Fulltrader',
    location: 'Remoto',
    description: 'Desenvolvimento de aplicações web com foco em estatísticas esportivas.',
    startDate: 'Março 2025',
    endDate: 'Presente',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 'job-4',
    title: 'Desenvolvedor Pleno',
    company: 'Gigaconsult',
    location: 'Presidente Prudente - SP',
    description: 'Desenvolvimento de sistemas web com foco em franquias de consultórios odontológicos com funcionalidades operacionais, administrativas e dashboards com informações relevantes para a estratégia do negócio.',
    startDate: 'Maio 2019',
    endDate: 'Agosto 2024',
    skills: ['Vue', 'TypeScript', 'Jquery', 'SQL', '.Net']
  },
  {
    id: 'job-3',
    title: 'Desenvolvedor Freelancer',
    company: 'FG1 Comunicação - Agência de growth marketing em Curitiba',
    location: 'Remoto',
    description: 'Desenvolvimento de sites para empresas de pequeno e médio porte em WordPress',
    startDate: 'Setembro 2016',
    endDate: 'Abril 2019',
    skills: ['Wordpress', 'PHP', 'Javascript', 'Photoshop']
  },
  {
    id: 'job-2',
    title: 'Desenvolvedor Júnior',
    company: 'We Planner',
    location: 'Remoto',
    description: 'Desenvolvimento de aplicações mobile.',
    startDate: 'Maio 2017',
    endDate: 'Abril 2018',
    skills: ['Ionic', 'Vue', 'TypeScript', 'Cordova']
  },
  {
    id: 'job-1',
    title: 'Estagiário',
    company: 'Multimidia Educacional',
    location: 'Presidente Prudente - SP',
    description: 'Desenvolvimento de aulas para ensino infantil baseado em aulas modelo dos professores atendidos.',
    startDate: 'Setembro 2014',
    endDate: 'Maio 2016',
    skills: ['Photoshop', 'Javascript', 'HTML', 'CSS']
  }
]

export const useJobs = () => {
  return {
    jobs
  }
}