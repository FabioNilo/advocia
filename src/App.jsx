import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  MessageSquare,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Scale,
  FileCheck,
  Heart,
  TrendingUp,
} from "lucide-react";

import mileide from "./assets/mileide2.jpg";
import cordeiro from "./assets/cordeiro.jpg";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    caso: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.contato.trim()) newErrors.contato = "Contato é obrigatório.";
    if (!formData.caso.trim()) newErrors.caso = "Descreva seu caso.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
      return;
    }
    setErrors({});
    setSuccess(true);
    const numeroEmpresa = "5573988599019"; // coloque o número da empresa aqui
    const mensagem = `Olá, gostaria de solicitar uma análise:\n  \n- Nome: ${formData.nome}\n- Contato: ${formData.contato}\n- Caso: ${formData.caso}`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank"); // abre o WhatsApp em uma nova aba/janela
  };

  const testimonials = [
    {
      name: "Maria Santos",
      case: "Aposentadoria por Tempo de Contribuição",
      text: "Após 2 anos de negativas do INSS, consegui minha aposentadoria em apenas 6 meses com o escritório. Profissionalismo exemplar!",
      rating: 5,
    },
    {
      name: "João Silva",
      case: "Auxílio-Doença",
      text: "Estava sem receber há meses. A advocacia resolveu meu caso rapidamente e ainda conseguiu os atrasados.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      case: "Revisão de Benefício",
      text: "Descobri que estava recebendo menos do que tinha direito. Agora recebo o valor correto graças ao excelente trabalho.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: FileCheck,
      title: "Aposentadorias",
      description: "Por idade, tempo de contribuição, especial e por invalidez",
      features: [
        "Análise de documentos",
        "Cálculo de tempo",
        "Acompanhamento processual",
      ],
    },
    {
      icon: Heart,
      title: "Auxílios",
      description: "Auxílio-doença, acidente, maternidade e outros benefícios",
      features: [
        "Perícias médicas",
        "Recursos administrativos",
        "Ações judiciais",
      ],
    },
    {
      icon: TrendingUp,
      title: "Revisões",
      description: "Revisão de benefícios e recuperação de valores atrasados",
      features: [
        "Revisão da vida toda",
        "Erro de Cálculo",
        "Inclusão de períodos",
      ],
    },
  ];

  const faqs = [
    {
      question: "O que é o BPC/LOAS? É uma aposentadoria?",
      answer:
        "Não, o Benefício de Prestação Continuada (BPC/LOAS) não é uma aposentadoria. É um benefício assistencial de um salário mínimo mensal pago a idosos com 65 anos ou mais, ou a pessoas com deficiência de qualquer idade, desde que comprovem baixa renda familiar. Ele não exige contribuição prévia ao INSS, mas também não dá direito a 13º salário ou pensão por morte.",
    },
    {
      question:
        "Crianças com autismo ou outras neurodivergências têm direito a benefícios?",
      answer:
        "Sim, é possível solicitar o BPC/LOAS para crianças com autismo ou outras deficiências que gerem impedimentos de longo prazo. A concessão depende de avaliação médica e social do INSS, que analisa a condição da criança e a renda familiar, que deve ser de no máximo 1/4 do salário mínimo por pessoa.",
    },
    {
      question:
        "Recebi um auxílio-doença, posso ter direito ao auxílio-acidente?",
      answer:
        "Sim, o Auxílio-Acidente é um benefício indenizatório pago a quem sofreu um acidente (de trabalho ou não) e ficou com sequelas que reduzem sua capacidade de trabalho de forma permanente. Ele é pago geralmente após a alta do auxílio-doença e pode ser acumulado com o salário, sendo cessado apenas com a aposentadoria do segurado.",
    },
    {
      question: "O que devo levar para a perícia médica do INSS?",
      answer:
        "No dia da perícia, leve todos os documentos que comprovem sua incapacidade, como atestados, laudos, receitas e exames médicos recentes e em bom estado. É fundamental ser honesto sobre sua condição e como ela afeta sua rotina e a capacidade para o trabalho. Não minta ou exagere, pois o perito pode verificar a autenticidade das informações.",
    },
    {
      question: "Quanto tempo de contribuição eu preciso para me aposentar?",
      answer:
        "Depende da regra de aposentadoria aplicável ao seu caso. Após a Reforma da Previdência, as regras mudaram e, além do tempo de contribuição, é necessário cumprir uma idade mínima (65 anos para homens e 62 para mulheres) e um tempo de contribuição de 15 anos para mulheres e 20 anos para homens que começaram a contribuir após a reforma.",
    },
    {
      question: "O que é o CNIS e como consulto meu extrato?",
      answer:
        "O CNIS (Cadastro Nacional de Informações Sociais) é o extrato com todo o seu histórico de contribuições. Você pode consultá-lo facilmente pelo site ou aplicativo Meu INSS, usando seu CPF e senha.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Escritório de advocacia moderno e elegante"
            src="https://images.unsplash.com/photo-1555374018-13a8994ab246"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Garanta Seus
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  {" "}
                  Direitos
                </span>
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl mb-8 text-gray-200 leading-relaxed">
                Advocacia especializada em{" "}
                <strong>Direito Previdenciário</strong> com foco em processos
                administrativos e judiciais no INSS.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <ShieldCheck className="h-5 w-5 text-amber-400" />
                  <span className="text-sm lg:text-base">
                    Expertise em INSS
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <FileText className="h-5 w-5 text-green-400" />
                  <span className="text-sm lg:text-base">
                    Consulta Processual
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  <span className="text-sm lg:text-base">
                    Atendimento Personalizado
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                >
                  Fale com um Especialista
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Scale className="h-6 w-6 text-amber-400" />
                Receba uma análise pré-liminar
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 ${
                      errors.nome ? "border-red-500" : ""
                    }`}
                  />
                  {errors.nome && (
                    <span className="text-red-300 text-xs">{errors.nome}</span>
                  )}
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    WhatsApp ou Email
                  </label>
                  <input
                    type="text"
                    name="contato"
                    value={formData.contato}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000 ou email@exemplo.com"
                    className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 ${
                      errors.contato ? "border-red-500" : ""
                    }`}
                  />
                  {errors.contato && (
                    <span className="text-red-300 text-xs">
                      {errors.contato}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Descreva seu caso
                  </label>
                  <textarea
                    rows={4}
                    name="caso"
                    value={formData.caso}
                    onChange={handleInputChange}
                    placeholder="Ex: Meu benefício foi negado pelo INSS, preciso de ajuda para entrar com recurso..."
                    className={`w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-all duration-300 ${
                      errors.caso ? "border-red-500" : ""
                    }`}
                  />
                  {errors.caso && (
                    <span className="text-red-300 text-xs">{errors.caso}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
                >
                  Envio para Whatsapp
                </button>
                {success && (
                  <p className="text-green-300 text-center text-sm">
                    Enviado com sucesso! Aguarde nosso contato.
                  </p>
                )}
                <p className="text-xs text-gray-300 text-center">
                  Resposta em até 24 horas • 100% confidencial
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dra. [Nome] */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  Conheça a
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                    {" "}
                    Especialista
                  </span>
                </h2>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Dra. Mileide Cordeiro
                  </h3>
                  <p className="text-amber-600 font-semibold text-lg">
                    OAB/BA 59899
                  </p>
                  <p className="text-gray-600">
                    Advogada especialista em Direito Previdenciário
                  </p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Graduada em Direito pela{" "}
                    <strong>Faculdade de Ilhéus</strong>, com mais de
                    <strong> 05 anos de experiência exclusiva</strong> em
                    Direito Previdenciário.
                  </p>

                  <p>
                    Especializada em processos administrativos e judiciais junto
                    ao INSS, com foco em{" "}
                    <strong>
                      aposentadorias, auxílios e revisões de benefícios
                    </strong>
                    .
                  </p>

                  <p>
                    Pós-graduada em{" "}
                    <strong>Direito Previdenciário e Trabalhista</strong>,
                    mantém-se constantemente atualizada com as mudanças na
                    legislação previdenciária para oferecer o melhor atendimento
                    aos seus clientes.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                    <p className="text-amber-800 italic">
                      "Sinto-me realizada na minha profissão, ao conseguir vê
                      garantidos todos os direitos do meu cliente. Ao prezar
                      pela celeridade, montamos e descutimos a estratégia melhor
                      para cada caso."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {/* Card Ação Judicial */}
                  <div className="bg-white border-2 border-amber-400 p-6 rounded-xl text-center shadow-lg hover:shadow-amber-200 transition-shadow duration-300 flex flex-col items-center">
                    <Scale className="mx-auto h-10 w-10 text-amber-500 mb-2" />
                    <div className="text-2xl font-bold text-amber-600 mb-1">
                      Ação Judicial
                    </div>
                    <div className="text-gray-700 mb-2">
                      Quando seus direitos são negados, lutamos por você na
                      Justiça!
                    </div>
                    <button
                      className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition"
                      onClick={() =>
                        document
                          .getElementById("contato")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Saiba mais
                    </button>
                  </div>
                  {/* Card Ação Administrativa */}
                  <div className="bg-white border-2 border-green-400 p-6 rounded-xl text-center shadow-lg hover:shadow-green-200 transition-shadow duration-300 flex flex-col items-center">
                    <FileCheck className="mx-auto h-10 w-10 text-green-500 mb-2" />
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      Ação Administrativa
                    </div>
                    <div className="text-gray-700 mb-2">
                      Orientação completa para resolver seu caso direto no INSS,
                      sem complicações.
                    </div>
                    <button
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
                      onClick={() =>
                        document
                          .getElementById("contato")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <img
                    src={mileide}
                    alt="Dra. [Nome] - Advogada Especialista em Direito Previdenciário"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-2xl shadow-lg">
                    <Scale className="h-8 w-8" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 -left-8 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-16 -right-8 w-12 h-12 bg-yellow-100 rounded-full opacity-50"></div>
                <div className="absolute top-20 -right-12 w-8 h-8 bg-amber-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Dúvidas Frequentes sobre Aposentadoria e INSS 🧐
            </h2>
            <p className="text-gray-600">
              Veja a resposta das principais dúvidas ligadas ao INSS e
              aposentadoria.
            </p>
            <div className="block lg:hidden mt-2 text-amber-600 text-sm font-medium flex items-center justify-center gap-1">
              <svg
                className="w-4 h-4 inline-block animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Toque para ver a resposta
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                tabIndex={0}
                role="button"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setOpenFaq(openFaq === idx ? null : idx);
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      openFaq === idx
                        ? "rotate-180 text-amber-500"
                        : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openFaq === idx && (
                  <p
                    id={`faq-answer-${idx}`}
                    className="text-gray-600 mt-2 transition-all duration-300"
                  >
                    {faq.answer}
                  </p>
                )}
                <div className="lg:hidden text-xs text-gray-400 mt-1">
                  {!openFaq === idx && "Toque para ver a resposta"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas em Direito Previdenciário com foco na defesa dos
              seus direitos junto ao INSS
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="h-12 w-12 text-amber-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Por que Escolher Nosso Escritório?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={cordeiro}
                alt="Advocada especialista em direito previdenciário"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Especialização Exclusiva
                  </h3>
                  <p className="text-gray-600">
                    Foco 100% em Direito Previdenciário, conhecendo todas as
                    nuances da legislação do INSS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Cada caso é único. Oferecemos atenção individual e
                    estratégias específicas para sua situação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Agilidade nos Processos
                  </h3>
                  <p className="text-gray-600">
                    Acompanhamento constante e atualizações regulares sobre o
                    andamento do seu processo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Transparência Total
                  </h3>
                  <p className="text-gray-600">
                    Valores claros, sem taxas ocultas. Você só paga quando
                    ganharmos seu caso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de pessoas que tiveram seus direitos garantidos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-amber-600 font-medium">
                    {testimonial.case}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300">
              Pronto para garantir seus direitos? Vamos conversar!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="font-semibold">Telefone/WhatsApp</div>
                      <div className="text-gray-300">(73) 98859-9019</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">
                        mileideadvogada@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="font-semibold">Endereço</div>
                      <div className="text-gray-300">
                        Edifício Comercial Fraga Center, 123 - Centro
                        <br />
                        Ilhéus - BA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Horário de Atendimento
                </h3>
                <div className="text-gray-300">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div>WhatsApp: 24h para emergências</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="(73) 98859-9019"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                      placeholder="Descreva seu caso ou dúvida..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">
              Advocacia Previdenciária
            </div>
            <div className="text-gray-400 mb-4">
              Especialistas em defender seus direitos junto ao INSS
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Advocacia Previdenciária. Todos os direitos reservados. |
              OAB/BA59899
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

