/**
 * Resume Application Component
 * 
 * A professional, responsive resume application built with Angular.
 * Features a two-column layout with sidebar and main content area.
 * Includes PDF download functionality via browser print dialog.
 * 
 * @author Abdul Bangura
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Profile data object containing all resume information
   * Structured for easy maintenance and updates
   */
  profile = {
    name: 'Abdul Bangura',
    title: 'Software Developer',
    photo: 'assets/Bangura PassportPhotograph.png',
    
    contact: {
      phone: '+232 88180366',
      phone2: '+232 75556630',
      email: 'abdulbangura023@gmail.com',
      location: '4 Maghuraka Road, Masingbi Town',
      languages: 'Temne, Krio and English Language',
      github: 'https://github.com/BanguraAbdul'
    },
    
    summary: 'Dedicated software developer with a strong foundation in computer science, full stack development, and data science. Experienced in building web applications using Angular and modern frontend technologies. Passionate about applying technology to solve real-world challenges, particularly in healthcare and underserved communities.',
    
    skills: [
      { category: 'Programming Languages', items: ['Python', 'Java', 'C++', 'C'] },
      { category: 'Web Technologies', items: ['Angular', 'HTML', 'CSS', 'Bootstrap'] },
      { category: 'Backend & Database', items: ['Spring Boot', 'SQL', 'PostgreSQL', 'MS Access'] },
      { category: 'Tools & Platforms', items: ['Git & GitHub', 'Cursor AI', 'Microsoft Office Suite', 'Google Workspace'] }
    ],
    
    experience: [
      {
        title: 'Head of Computer Science Department',
        company: 'Sella Technical Institute Kamakwie',
        location: 'Sierra Leone',
        period: 'September 2023 - September 2025',
        responsibilities: [
          'Designed and updated curriculum to ensure students are trained in modern technology tools.',
          'Delivered lectures in programming, networking, and Microsoft Office applications, increasing student enrollment by 60%.'
        ]
      },
      {
        title: 'Intern',
        company: 'Link Cooperation Limited',
        location: 'Sierra Leone',
        period: 'May 2022 - September 2023',
        responsibilities: [
          'Assisted in frontend development using HTML, CSS, and Angular for client websites.',
          'Contributed to database management systems and trained students in Microsoft Office tools.'
        ]
      },
      {
        title: 'Intern',
        company: 'UniMak Workflow Innovation Hub',
        location: 'Sierra Leone',
        period: 'October 2022 - March 2023',
        responsibilities: [
          'Managed student and staff data within a learning management system.',
          'Updated and maintained student profiles through the MyClass Campus application.'
        ]
      }
    ],
    
    education: [
      {
        degree: 'Ubuntu Africa Foundation 5th Cohort Trainee',
        institution: 'Ubuntu Africa Foundation',
        period: 'June 2025 -  March 2026',
        details: [
          'Engaged in intensive training in Git & GitHub, PostgreSQL, Java, Angular, Spring Boot and AI to develop full stack applications for community-driven solutions.',
          'Collaborated on real-world projects on enterprise leve to address technology challenges.'
        ]
      },
      {
        degree: 'BSc in Computer Science',
        institution: 'University of Makeni',
        period: 'October 2019 - March 2024',
        details: [
          'Completed a research project on a breast cancer predictive model for Makeni Hospital, utilising Logistic Regression and Random Forest Classifier to achieve 95.23% accuracy.'
        ]
      }
    ],
    
    certifications: [
      'Frontend Web Development (2022): WordPress, JavaScript, HTML, and CSS.',
      'Microsoft Office Packages (2017): Advanced skills in MS Word, PowerPoint, Excel, Publisher, and Access.'
    ],
    
    achievements: [
      'President, Computer Science Society — University of Makeni',
      'Led the Brush-up Skills Seminar Series to improve students\' technical skills.',
      'Promoted collaboration between students, faculty, and health professionals on data-driven healthcare solutions.'
    ],
    
    projects: [
      {
        name: 'ThePlugICT SL Website',
        description: 'Built a  business website using Angular and Bootstrap',
        technologies: ['Angular', 'Bootstrap']
      },
      {
        name: 'Vitalydae',
        description: 'Contributed to an enterprise web application using Angular and Spring Boot. Implemented dynamic dropdown filtering and backend user filtering functionality. Integrated frontend components with REST APIs using layered architecture principles.',
        technologies: ['Angular', 'Spring Boot']
      }
    ],
    
    references: [
      {
        name: 'Mr. I. Kalokoh',
        title: 'Computer Science Department, University of Makeni',
        phone: '+232 78 228338',
        email: 'ikalokoh@unimak.edu.sl'
      },
      {
        name: 'Mr. Lukeman Kamara',
        title: 'Team Two Supervisor, Ubuntu Africa Tech Sierra Leone',
        phone: '+232 78 883816',
        email: 'l.kamara@ubuntuafrika.com'
      }
    ]
  };

  /**
   * Triggers browser print dialog for PDF generation
   * The print styles ensure proper formatting and margins
   */
  async downloadResume() {
    window.print();
  }
}
