export const PREFEITURA = "Prefeitura de Barueri"

// Unidade única — produto Barueri não é multi-tenant
export const unidadesCuca = ["Prefeitura de Barueri"] as const
export type UnidadeCuca = typeof unidadesCuca[number]

export const menuItems = [
    {
        title: "Empregabilidade",
        url: "/empregabilidade",
        icon: "Briefcase",
        permission: { recurso: "empreg_banco_cv", acao: "read" },
        items: [
            { title: "Painel Geral", url: "/empregabilidade", permission: { recurso: "empreg_banco_cv", acao: "read" } },
            { title: "Atendimento", url: "/empregabilidade/mensagens", permission: { recurso: "atendimentos_empregabilidade", acao: "read" } },
            { title: "Empresas", url: "/empregabilidade/empresas", permission: { recurso: "empreg_vagas", acao: "read" } },
            { title: "Vagas", url: "/empregabilidade/vagas", permission: { recurso: "empreg_vagas", acao: "read" } },
            { title: "Marcar Seleção", url: "/empregabilidade/selecao/nova", permission: { recurso: "empreg_vagas", acao: "write" } },
            { title: "Candidatos", url: "/empregabilidade/candidatos", permission: { recurso: "empreg_banco_cv", acao: "read" } },
            { title: "Banco de Talentos", url: "/empregabilidade/banco-talentos", permission: { recurso: "empreg_banco_cv", acao: "read" } },
            { title: "Criar Currículo", url: "/empregabilidade/criar-curriculo", permission: { recurso: "empreg_banco_cv", acao: "read" } },
        ],
    },
    {
        title: "Configurações",
        url: "/configuracoes",
        icon: "Settings",
        items: [
            { title: "Atendimento Humano", url: "/configuracoes/transbordo", permission: { recurso: "config_whatsapp", acao: "read" } },
            { title: "WhatsApp", url: "/configuracoes/whatsapp", permission: { recurso: "config_whatsapp", acao: "read" } },
            { title: "Colaboradores", url: "/configuracoes/colaboradores", permission: { recurso: "config_colaboradores", acao: "read" } },
            { title: "Perfis (RBAC)", url: "/configuracoes/perfis", permission: { recurso: "config_perfis", acao: "read" } },
        ],
    },
]
