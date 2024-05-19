import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Components UI iav</span>,
  project: {
    link: 'https://github.com/Jose-Miguel7/componentes-ui-react',
  },
  docsRepositoryBase: 'https://github.com/Jose-Miguel7/componentes-ui-react',
  footer: {
    text: 'Todos los derechos reservados',
  },
  feedback: {
    content: '¿Quieres sugerir una mejora?',
  },
  editLink: {
    text: '',
  },
  search: {
    placeholder: 'Buscar en la documentación',
    emptyResult: <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', fontSize: '14px'}}>No se encontraron resultados</div>
  },
  toc: {
    title: 'Contenido',
  }
}

export default config
