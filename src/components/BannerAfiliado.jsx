import { ExternalLink, Gift } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

const BannerAfiliado = () => {
  return (
    <Card className="bg-gradient-to-r from-orange-100 to-pink-100 border-2 border-orange-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Gift className="text-orange-600" size={28} />
            <h3 className="text-2xl font-bold text-orange-800">
              Espaço Publicitário
            </h3>
            <Gift className="text-orange-600" size={28} />
          </div>
          <p className="text-orange-700 mb-4 text-lg">
            Aqui você pode inserir seu banner de afiliado ou publicidade
          </p>
          <div className="bg-white rounded-lg p-8 border-2 border-dashed border-orange-300 min-h-[200px] flex items-center justify-center">
            <div className="text-center text-orange-600">
              <ExternalLink size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">
                Banner de Afiliado
              </p>
              <p className="text-sm opacity-75 mt-2">
                Dimensões recomendadas: 728x200px ou 300x250px
              </p>
            </div>
          </div>
          <p className="text-sm text-orange-600 mt-3 italic">
            * Este espaço está disponível para parcerias e publicidade
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BannerAfiliado

