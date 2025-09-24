import React, { useState } from "react";
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const numeroEmpresa = "5573999099040"; // coloque o número da empresa aqui

    const mensagem = `Olá, gostaria de solicitar uma análise:
  
- Nome: ${formData.nome}
- Contato: ${formData.contato}
- Caso: ${formData.caso}`;

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
                administrativos e judiciais no INSS. Mais de 500 casos de
                sucesso.
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
              <div className="space-y-4">
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
                >
                  Envio para Whatsapp
                </button>
                <p className="text-xs text-gray-300 text-center">
                  Resposta em até 24 horas • 100% confidencial
                </p>
              </div>
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
                    OAB/XX 00000
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
                      "Minha missão é garantir que cada pessoa tenha acesso aos
                      benefícios que tem direito, com transparência, dedicação e
                      resultado."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Casos Resolvidos
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Taxa de Sucesso</div>
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
              Resultados que Falam por Si
            </h2>
            <p className="text-gray-600">
              Números reais de uma advocacia comprometida com resultados
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Casos de Sucesso</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Taxa de Aprovação</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                24h
              </div>
              <div className="text-gray-600 font-medium">Tempo de Resposta</div>
            </div>
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
                      <div className="text-gray-300">(00) 00000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">
                        contato@advocaciaprevidenciaria.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-amber-400" />
                    <div>
                      <div className="font-semibold">Endereço</div>
                      <div className="text-gray-300">
                        Rua Example, 123 - Centro
                        <br />
                        Sua Cidade - UF
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
                      placeholder="(00) 00000-0000"
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
              OAB/XX 00000
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
