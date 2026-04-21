import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Plataforma Web Calificadas',
      description: 'Diseñé y lideré toda la arquitectura de API en C# para la plataforma web principal, soportando múltiples módulos concurrentes. Administré entornos Azure con +99% de disponibilidad.',
      tech: ['C# .NET', 'Angular', 'TypeScript', 'SQL Server', 'Azure'],
      category: 'Fullstack',
    },
    {
      title: 'Sistema de Información Elite Flower',
      description: 'Sistema completo desde cero: generación de PDF, firma digital, SSO con Active Directory, notificaciones por correo, flujos de aprobación, grillas editables y operaciones CRUD. Incrementó el tráfico web un 20%.',
      tech: ['C# .NET MVC5', 'SQL Server', 'Node.js', 'JavaScript', 'Bootstrap'],
      category: 'Fullstack',
    },
    {
      title: 'Meditech — Citas Médicas',
      description: 'Aplicación de citas médicas con autenticación completa, búsqueda y filtrado avanzado, bloqueo de usuarios y notificaciones automáticas por correo electrónico.',
      tech: ['React', 'JavaScript', 'PostgreSQL', 'Sequelize', 'Chakra UI'],
      category: 'Fullstack',
    },
    {
      title: 'Arquitectura de APIs REST',
      description: 'Diseño e implementación de APIs REST escalables con patrones limpios en C# .NET Core, documentación con Swagger y pruebas de integración. Integradas con Azure Service Bus.',
      tech: ['ASP.NET Core', 'C#', 'Azure', 'Swagger', 'JWT'],
      category: 'Backend',
    },
    {
      title: 'Pipeline CI/CD Azure DevOps',
      description: 'Implementación de pipelines completos en Azure DevOps para proyectos .NET: build automatizado, pruebas, análisis de calidad y despliegue a entornos QA y producción.',
      tech: ['Azure DevOps', 'Azure', 'Git', 'YAML', '.NET'],
      category: 'DevOps',
    },
    {
      title: 'Automatización de Procesos Documentales',
      description: 'Automatización de flujos de trabajo internos con generación de PDF dinámicos, firma digital y aprobaciones multi-nivel, reduciendo el esfuerzo manual del equipo significativamente.',
      tech: ['C# .NET', 'SQL Server', 'LINQ', 'Active Directory'],
      category: 'Backend',
    },
  ];
}
