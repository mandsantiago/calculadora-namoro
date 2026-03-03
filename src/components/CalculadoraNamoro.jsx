import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Calendar, Clock, Sparkles } from 'lucide-react'

const CalculadoraNamoro = () => {
  const [dataInicio, setDataInicio] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularTempo = () => {
    if (!dataInicio) return

    const inicio = new Date(dataInicio)
    const agora = new Date()
    
    if (inicio > agora) {
      alert('A data de início não pode ser no futuro!')
      return
    }

    // Cálculo detalhado
    const diffMs = agora - inicio
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffHoras = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutos = Math.floor(diffMs / (1000 * 60))

    // Cálculo correto de anos, meses e dias
    let anos = agora.getFullYear() - inicio.getFullYear()
    let meses = agora.getMonth() - inicio.getMonth()
    let dias = agora.getDate() - inicio.getDate()

    // Ajustar se o dia atual é menor que o dia de início
    if (dias < 0) {
      meses--
      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate()
      dias += ultimoDiaMesAnterior
    }

    // Ajustar se o mês atual é menor que o mês de início
    if (meses < 0) {
      anos--
      meses += 12
    }

    // Cálculo de semanas
    const semanas = Math.floor(diffDias / 7)

    // Cálculo de primaveras (anos completos)
    const primaveras = anos

    // Cálculo de Dias dos Namorados (12 de junho no Brasil)
    let diasNamorados = 0
    for (let ano = inicio.getFullYear(); ano <= agora.getFullYear(); ano++) {
      const diaNamorados = new Date(ano, 5, 12) // Junho é mês 5 (0-indexado)
      if (diaNamorados >= inicio && diaNamorados <= agora) {
        diasNamorados++
      }
    }

    // Determinar a boda atual
    const bodas = getBodaAtual(anos)

    setResultado({
      anos,
      meses,
      dias,
      totalDias: diffDias,
      totalHoras: diffHoras,
      totalMinutos: diffMinutos,
      semanas,
      primaveras,
      diasNamorados,
      bodas
    })
  }

  const getBodaAtual = (anos) => {
    const bodasMap = {
      1: 'Bodas de Papel',
      2: 'Bodas de Algodão',
      3: 'Bodas de Trigo',
      4: 'Bodas de Linho',
      5: 'Bodas de Madeira ou Ferro',
      6: 'Bodas de Perfume ou Açúcar',
      7: 'Bodas de Latão ou Lã',
      8: 'Bodas de Papoula ou Barro',
      9: 'Bodas de Cerâmica ou Vime',
      10: 'Bodas de Estanho',
      11: 'Bodas de Aço',
      12: 'Bodas de Seda ou Ônix',
      13: 'Bodas de Linho ou Renda',
      14: 'Bodas de Marfim',
      15: 'Bodas de Cristal',
      16: 'Bodas de Turmalina',
      17: 'Bodas de Rosa',
      18: 'Bodas de Turquesa',
      19: 'Bodas de Cretone ou Água-marinha',
      20: 'Bodas de Porcelana',
      21: 'Bodas de Zircão',
      22: 'Bodas de Louça',
      23: 'Bodas de Palha',
      24: 'Bodas de Opala',
      25: 'Bodas de Prata',
      30: 'Bodas de Pérola',
      35: 'Bodas de Coral',
      40: 'Bodas de Esmeralda',
      45: 'Bodas de Rubi',
      50: 'Bodas de Ouro',
      55: 'Bodas de Ametista',
      60: 'Bodas de Diamante',
      65: 'Bodas de Platina',
      70: 'Bodas de Vinho',
      75: 'Bodas de Brilhante'
    }

    return bodasMap[anos] || (anos > 0 ? `${anos} anos de união` : 'Início da jornada')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Calculadora Principal */}
      <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-800 flex items-center justify-center gap-2">
            <Heart className="text-red-500" />
            Calculadora de Tempo de Namoro
            <Heart className="text-red-500" />
          </CardTitle>
          <CardDescription className="text-lg text-purple-600">
            Descubra há quanto tempo vocês estão juntos e qual boda estão comemorando
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="dataInicio" className="block text-sm font-medium text-purple-700 mb-2">
                Data de início do relacionamento:
              </label>
              <Input
                id="dataInicio"
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <Button 
              onClick={calcularTempo}
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-2"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Calcular
            </Button>
          </div>

          {resultado && (
            <div className="mt-8 space-y-6">
              {/* Resultado Principal */}
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">
                  Vocês estão juntos há:
                </h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {resultado.anos} anos, {resultado.meses} meses e {resultado.dias} dias
                </div>
                <div className="text-lg text-purple-600">
                  {resultado.bodas}
                </div>
              </div>

              {/* Detalhes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Clock className="mx-auto mb-2 text-purple-600" size={24} />
                    <div className="text-2xl font-bold text-purple-800">{resultado.totalDias.toLocaleString()}</div>
                    <div className="text-sm text-purple-600">Dias totais</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Clock className="mx-auto mb-2 text-orange-600" size={24} />
                    <div className="text-2xl font-bold text-orange-600">{resultado.totalHoras.toLocaleString()}</div>
                    <div className="text-sm text-orange-600">Horas totais</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Calendar className="mx-auto mb-2 text-purple-600" size={24} />
                    <div className="text-2xl font-bold text-purple-800">{resultado.semanas.toLocaleString()}</div>
                    <div className="text-sm text-purple-600">Semanas</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-orange-200">
                  <CardContent className="p-4 text-center">
                    <Sparkles className="mx-auto mb-2 text-orange-600" size={24} />
                    <div className="text-2xl font-bold text-orange-600">{resultado.primaveras}</div>
                    <div className="text-sm text-orange-600">Primaveras juntos</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-red-200">
                  <CardContent className="p-4 text-center">
                    <Heart className="mx-auto mb-2 text-red-500" size={24} />
                    <div className="text-2xl font-bold text-red-600">{resultado.diasNamorados}</div>
                    <div className="text-sm text-red-600">Dias dos Namorados</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Clock className="mx-auto mb-2 text-purple-600" size={24} />
                    <div className="text-2xl font-bold text-purple-800">{resultado.totalMinutos.toLocaleString()}</div>
                    <div className="text-sm text-purple-600">Minutos totais</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CalculadoraNamoro

