import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups = [
    {
      title: 'Stack Principal',
      skills: [
        { name: 'C#', featured: true },
        { name: '.NET / .NET Core', featured: true },
        { name: 'Angular', featured: true },
        { name: 'TypeScript', featured: true },
        { name: 'SQL Server', featured: true },
        { name: 'Azure', featured: true },
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'ASP.NET Core', featured: false },
        { name: '.NET MVC5', featured: false },
        { name: 'APIs REST', featured: false },
        { name: 'Entity Framework', featured: false },
        { name: 'LINQ', featured: false },
        { name: 'Node.js', featured: false },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', featured: false },
        { name: 'HTML / SCSS', featured: false },
        { name: 'React', featured: false },
        { name: 'Bootstrap', featured: false },
        { name: 'Infragistics UI', featured: false },
      ]
    },
    {
      title: 'Base de Datos',
      skills: [
        { name: 'SQL Server', featured: true },
        { name: 'PostgreSQL', featured: false },
        { name: 'Sequelize', featured: false },
        { name: 'T-SQL', featured: false },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', featured: true },
        { name: 'Azure DevOps', featured: false },
        { name: 'Git', featured: false },
        { name: 'Bitbucket', featured: false },
        { name: 'Active Directory', featured: false },
        { name: 'Python (básico)', featured: false },
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Jira', featured: false },
        { name: 'Confluence', featured: false },
        { name: 'Slack', featured: false },
        { name: 'Trello', featured: false },
        { name: 'Scrum / Agile', featured: false },
        { name: 'Código Limpio', featured: false },
      ]
    },
  ];

  softSkills = [
    'Liderazgo de equipos',
    'Comunicación efectiva',
    'Scrum / Agile',
    'Resolución de problemas',
    'Trabajo remoto',
    'Inglés B2',
    'Aprendizaje continuo',
    'Documentación técnica',
  ];
}
