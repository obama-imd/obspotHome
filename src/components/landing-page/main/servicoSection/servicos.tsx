interface Service {
  title: string;
  illustrationPath?: string;
  href?: string;
}

const servicos: Service[] = 
    [
        {
            title: 'Rede STEAM Potiguar',
            illustrationPath: '/images/servicos/steam-potiguar.svg',
            href: '/rede',
        },
        {
            title: 'Recursos Educacionais',
            illustrationPath: '/images/servicos/recursos.svg',
            href: '/recursos-educacionais',
        },
        {
            title: 'Observatório',
            illustrationPath: '/images/servicos/observatorio.svg',
            href: '/observatorio',
        }     
    ];


export default servicos;
