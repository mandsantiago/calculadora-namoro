import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const ContadorDiaDosNamorados = () => {
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const calcularTempoRestante = () => {
      // Data atual com fuso horário de São Paulo
      const agora = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      
      // Define o próximo Dia dos Namorados (12 de Junho)
      let anoDiaDosNamorados = agora.getFullYear();
      let dataDiaDosNamorados = new Date(anoDiaDosNamorados, 5, 12); // Mês 5 é Junho (0-indexado)
      
      // Se já passou o Dia dos Namorados deste ano, calcula para o próximo ano
      if (agora > dataDiaDosNamorados) {
        anoDiaDosNamorados++;
        dataDiaDosNamorados = new Date(anoDiaDosNamorados, 5, 12);
      }
      
      const diferenca = dataDiaDosNamorados - agora;
      
      if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);
        
        setTempoRestante({ dias, horas, minutos, segundos });
      }
    };

    // Calcula imediatamente
    calcularTempoRestante();
    
    // Atualiza a cada segundo
    const timer = setInterval(calcularTempoRestante, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-pink-100 relative overflow-hidden text-center">
      <div className="absolute -right-6 -top-6 text-pink-50 opacity-50 pointer-events-none">
        <Heart size={120} fill="currentColor" />
      </div>
      <div className="absolute -left-6 -bottom-6 text-red-50 opacity-50 pointer-events-none">
        <Heart size={100} fill="currentColor" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="text-red-500 animate-pulse" size={24} fill="currentColor" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-600">
            Contagem Regressiva
          </h2>
          <Heart className="text-red-500 animate-pulse" size={24} fill="currentColor" />
        </div>
        
        <p className="text-gray-600 mb-6 font-medium">
          Faltam quantos dias para o Dia dos Namorados (12 de Junho)?
        </p>
        
        <div className="flex justify-center gap-3 md:gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold shadow-lg">
              {tempoRestante.dias}
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Dias</span>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-pink-300 mt-3 md:mt-4">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white text-red-500 border-2 border-red-100 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold shadow-sm">
              {tempoRestante.horas.toString().padStart(2, '0')}
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Horas</span>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-pink-300 mt-3 md:mt-4">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white text-red-500 border-2 border-red-100 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold shadow-sm">
              {tempoRestante.minutos.toString().padStart(2, '0')}
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Min</span>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-pink-300 mt-3 md:mt-4 hidden sm:block">:</div>
          
          <div className="flex flex-col items-center hidden sm:flex">
            <div className="bg-white text-red-500 border-2 border-red-100 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold shadow-sm">
              {tempoRestante.segundos.toString().padStart(2, '0')}
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wider">Seg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContadorDiaDosNamorados;
