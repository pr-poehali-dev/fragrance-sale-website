import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPerfume, setSelectedPerfume] = useState<any>(null);

  const perfumes = [
    {
      id: 1,
      name: 'Versace Eros',
      brand: 'Versace',
      price: '8 500 ₽',
      image: '/img/6a64a2fe-defa-49ea-b10d-b01db7637ec4.jpg',
      description: 'Мужской аромат страсти и силы с нотами мяты, яблока и ванили',
      notes: ['Мята', 'Зеленое яблоко', 'Лимон', 'Ваниль', 'Кедр'],
      samples: [
        { volume: '3 гр', price: '570 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '570 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '950 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 000 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 2,
      name: 'Dior Sauvage',
      brand: 'Dior',
      price: '12 500 ₽',
      image: '/img/2fd62f9b-2a29-4a87-8498-dafee46b503c.jpg',
      description: 'Свежий и мощный аромат с нотами бергамота, перца и амброксана',
      notes: ['Бергамот', 'Розовый перец', 'Лаванда', 'Амброксан'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 3,
      name: 'Creed Aventus',
      brand: 'Creed',
      price: '18 900 ₽',
      image: '/img/ac4cb203-9928-4d51-858e-6d96ab1919c1.jpg',
      description: 'Легендарный аромат успеха с нотами ананаса, дыма и сандала',
      notes: ['Ананас', 'Яблоко', 'Береза', 'Сандал', 'Мускус'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 4,
      name: 'Tom Ford Bitter Peach',
      brand: 'Tom Ford',
      price: '16 800 ₽',
      image: '/img/a1794971-735c-4445-91ee-032de02834c5.jpg',
      description: 'Чувственный фруктовый аромат с персиком, розой и пачули',
      notes: ['Персик', 'Роза', 'Сандал', 'Пачули'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 5,
      name: 'Louis Vuitton L\'Immensité',
      brand: 'Louis Vuitton',
      price: '14 200 ₽',
      image: '/img/78eb8ad9-d0df-4826-9e9a-03e1c9a56d9f.jpg',
      description: 'Элегантный цитрусово-древесный аромат для утонченных мужчин',
      notes: ['Грейпфрут', 'Имбирь', 'Кедр', 'Лабданум'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 6,
      name: 'Sospiro Erba Pura',
      brand: 'Sospiro',
      price: '15 500 ₽',
      image: '/img/2fd62f9b-2a29-4a87-8498-dafee46b503c.jpg',
      description: 'Сладкий и свежий аромат с цитрусами и ванилью',
      notes: ['Лимон', 'Апельсин', 'Ваниль', 'Мускус'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    }
  ];

  const brands = [
    { name: 'Versace', count: 8 },
    { name: 'Dior', count: 12 },
    { name: 'Creed', count: 15 },
    { name: 'Tom Ford', count: 22 },
    { name: 'Louis Vuitton', count: 9 },
    { name: 'Sospiro', count: 6 }
  ];

  const navigation = [
    { name: 'Главная', icon: 'Home' },
    { name: 'Каталог', icon: 'Grid3X3' },
    { name: 'Бренды', icon: 'Crown' },
    { name: 'Акции', icon: 'Percent' },
    { name: 'Доставка', icon: 'Truck' },
    { name: 'Контакты', icon: 'Phone' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-purple-900 to-luxury-purple">
      
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-luxury-gold to-luxury-pink bg-clip-text text-transparent">
                🌹 PARFUM
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center space-x-2 text-white/80 hover:text-luxury-gold transition-colors duration-300"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-open-sans">{item.name}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Icon name="Search" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Icon name="ShoppingBag" size={18} />
                <Badge variant="secondary" className="ml-1 bg-luxury-gold text-black">2</Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 via-luxury-pink/20 to-luxury-purple/20 animate-float"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Роскошные
              <span className="bg-gradient-to-r from-luxury-gold to-luxury-pink bg-clip-text text-transparent block">
                Ароматы
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 font-open-sans animate-fade-in" style={{animationDelay: '0.2s'}}>
              Откройте для себя мир изысканной парфюмерии. Закажите пробники перед покупкой и найдите свой идеальный аромат.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-gold to-luxury-pink text-black font-semibold hover:opacity-90 transition-opacity px-8 py-4"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Каталог ароматов
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all px-8 py-4"
              >
                <Icon name="TestTube" size={20} className="mr-2" />
                Заказать пробники
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Популярные ароматы
            </h2>
            <p className="text-white/70 font-open-sans">
              Самые востребованные парфюмы нашей коллекции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfumes.map((perfume, index) => (
              <Card 
                key={perfume.id} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 group animate-scale-in overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={perfume.image} 
                    alt={perfume.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-luxury-gold text-black font-semibold">
                      ХИТ
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-luxury-pink text-luxury-pink">
                      {perfume.brand}
                    </Badge>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-luxury-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <CardTitle className="text-white font-montserrat text-xl">
                    {perfume.name}
                  </CardTitle>
                  
                  <p className="text-white/70 text-sm font-open-sans">
                    {perfume.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {perfume.notes.map((note) => (
                      <Badge 
                        key={note} 
                        variant="secondary" 
                        className="bg-white/10 text-white border-white/20 text-xs"
                      >
                        {note}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-luxury-gold font-montserrat">
                        {perfume.price}
                      </div>
                      <div className="text-sm text-white/70">
                        Пробник: <span className="text-luxury-pink font-semibold">{perfume.samplePrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="flex-1 bg-luxury-pink hover:bg-luxury-pink/80 text-white"
                          onClick={() => setSelectedPerfume(perfume)}
                        >
                          <Icon name="TestTube" size={16} className="mr-2" />
                          Пробник
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-luxury-dark text-white border-luxury-gold">
                        <DialogHeader>
                          <DialogTitle className="font-montserrat text-luxury-gold">
                            Заказ пробника: {selectedPerfume?.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-white/80">
                            Пробник объемом 2мл позволит вам полноценно оценить аромат перед покупкой полноразмерного флакона.
                          </p>
                          <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                            <span>Стоимость пробника:</span>
                            <span className="text-luxury-pink font-bold text-xl">{selectedPerfume?.samplePrice}</span>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-luxury-gold to-luxury-pink text-black font-semibold">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Добавить в корзину
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button 
                      variant="outline" 
                      className="flex-1 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Популярные бренды
            </h2>
            <p className="text-white/70 font-open-sans">
              Лучшие парфюмерные дома мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card 
                key={brand.name}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-luxury-gold transition-all duration-300 cursor-pointer group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <Icon name="Crown" size={40} className="text-luxury-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-montserrat font-semibold text-white text-lg mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {brand.count} ароматов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-gradient-to-r from-luxury-gold/20 to-luxury-pink/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Card className="bg-black/40 backdrop-blur-md border-luxury-gold max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Icon name="Gift" size={60} className="text-luxury-gold mb-6 mx-auto animate-float" />
              
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
                Специальное предложение
              </h2>
              
              <p className="text-xl text-white/80 mb-6 font-open-sans">
                Закажите любые 3 пробника и получите 4-й в подарок!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-luxury-gold to-luxury-pink text-black font-semibold hover:opacity-90 transition-opacity px-8"
                >
                  <Icon name="TestTube" size={20} className="mr-2" />
                  Выбрать пробники
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black transition-all px-8"
                >
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-luxury-gold to-luxury-pink bg-clip-text text-transparent mb-4">
                🌹 PARFUM
              </div>
              <p className="text-white/70 font-open-sans mb-4">
                Ваш проводник в мир роскошных ароматов
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-luxury-pink hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-luxury-gold hover:scale-110 transition-transform cursor-pointer" />
                <Icon name="Mail" size={20} className="text-white hover:text-luxury-pink transition-colors cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Каталог</h3>
              <div className="space-y-2 text-white/70 font-open-sans">
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Женские ароматы</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Мужские ароматы</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Унисекс</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Новинки</div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-white/70 font-open-sans">
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Пробники</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Доставка</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Возврат</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Консультация</div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70 font-open-sans">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@parfum.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 font-open-sans">
              © 2024 PARFUM. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;