import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [selectedPerfume, setSelectedPerfume] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const perfumes = [
    {
      id: 1,
      name: 'Versace Eros',
      brand: 'Versace',
      category: 'Мужские',
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
      category: 'Мужские',
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
      category: 'Мужские',
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
      category: 'Унисекс',
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
      category: 'Мужские',
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
      category: 'Унисекс',
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
    },
    {
      id: 7,
      name: 'Tiziana Terenzi Kirke',
      brand: 'Tiziana Terenzi',
      category: 'Унисекс',
      price: '17 300 ₽',
      image: '/img/78eb8ad9-d0df-4826-9e9a-03e1c9a56d9f.jpg',
      description: 'Загадочный восточный аромат с нотами специй и амбры',
      notes: ['Шафран', 'Роза', 'Амбра', 'Уд'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 8,
      name: 'Escentric Molecules 02 Delux',
      brand: 'Escentric Molecules',
      category: 'Унисекс',
      price: '9 800 ₽',
      image: '/img/ac4cb203-9928-4d51-858e-6d96ab1919c1.jpg',
      description: 'Минималистичный аромат с уникальной молекулой Iso E Super',
      notes: ['Iso E Super', 'Ветивер', 'Мускус'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    },
    {
      id: 9,
      name: 'Victoria\'s Secret Tease Candy Noir',
      brand: 'Victoria\'s Secret',
      category: 'Женские',
      price: '6 500 ₽',
      image: '/img/a1794971-735c-4445-91ee-032de02834c5.jpg',
      description: 'Сладкий и игривый аромат с нотами карамели и ванили',
      notes: ['Карамель', 'Ваниль', 'Мускус', 'Сандал'],
      samples: [
        { volume: '3 гр', price: '600 ₽', type: 'чистое масло' },
        { volume: '5 мл', price: '600 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '10 мл', price: '1 100 ₽', type: 'распыление, концентрат 50/50' },
        { volume: '20 мл', price: '2 150 ₽', type: 'распыление, концентрат 50/50' }
      ]
    }
  ];

  const navigation = [
    { name: 'Главная', icon: 'Home', href: '/' },
    { name: 'Каталог', icon: 'Grid3X3', href: '/catalog' },
    { name: 'Бренды', icon: 'Crown' },
    { name: 'Акции', icon: 'Percent' },
    { name: 'Доставка', icon: 'Truck' },
    { name: 'Контакты', icon: 'Phone' }
  ];

  const brands = ['all', 'Versace', 'Dior', 'Creed', 'Tom Ford', 'Louis Vuitton', 'Sospiro', 'Tiziana Terenzi', 'Escentric Molecules', 'Victoria\'s Secret'];
  const categories = ['all', 'Мужские', 'Женские', 'Унисекс'];

  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesSearch = perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         perfume.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || perfume.brand === selectedBrand;
    const matchesCategory = selectedCategory === 'all' || perfume.category === selectedCategory;
    
    return matchesSearch && matchesBrand && matchesCategory;
  });

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

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-luxury-gold/20 to-luxury-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 animate-fade-in">
              Каталог ароматов
            </h1>
            <p className="text-xl text-white/80 font-open-sans animate-fade-in" style={{animationDelay: '0.2s'}}>
              Откройте для себя мир изысканной парфюмерии премиум класса
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={18} className="absolute left-3 top-3 text-white/50" />
                <Input
                  placeholder="Поиск по названию или бренду..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Выберите бренд" />
                </SelectTrigger>
                <SelectContent className="bg-luxury-dark border-luxury-gold">
                  <SelectItem value="all" className="text-white hover:bg-white/10">Все бренды</SelectItem>
                  {brands.slice(1).map(brand => (
                    <SelectItem key={brand} value={brand} className="text-white hover:bg-white/10">
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent className="bg-luxury-dark border-luxury-gold">
                  <SelectItem value="all" className="text-white hover:bg-white/10">Все категории</SelectItem>
                  {categories.slice(1).map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-white/70 font-open-sans">
              Найдено: {filteredPerfumes.length} ароматов
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPerfumes.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="Search" size={80} className="text-white/30 mx-auto mb-4" />
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Ничего не найдено
              </h3>
              <p className="text-white/70 font-open-sans">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPerfumes.map((perfume, index) => (
                <Card 
                  key={perfume.id} 
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 group animate-scale-in overflow-hidden"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={perfume.image} 
                      alt={perfume.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-luxury-gold text-black font-semibold text-xs">
                        {perfume.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-luxury-pink text-luxury-pink text-xs">
                        {perfume.brand}
                      </Badge>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Icon key={star} name="Star" size={12} className="text-luxury-gold fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <CardTitle className="text-white font-montserrat text-lg leading-tight">
                      {perfume.name}
                    </CardTitle>
                    
                    <p className="text-white/70 text-sm font-open-sans line-clamp-2">
                      {perfume.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {perfume.notes.slice(0, 3).map((note) => (
                        <Badge 
                          key={note} 
                          variant="secondary" 
                          className="bg-white/5 text-white/80 border-white/10 text-xs px-2 py-1"
                        >
                          {note}
                        </Badge>
                      ))}
                      {perfume.notes.length > 3 && (
                        <Badge 
                          variant="secondary" 
                          className="bg-white/5 text-white/80 border-white/10 text-xs px-2 py-1"
                        >
                          +{perfume.notes.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xl font-bold text-luxury-gold font-montserrat">
                          {perfume.price}
                        </div>
                        <div className="text-xs text-white/70">
                          Пробники от: <span className="text-luxury-pink font-semibold">{perfume.samples[0].price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm"
                            className="flex-1 bg-luxury-pink hover:bg-luxury-pink/80 text-white text-xs"
                            onClick={() => setSelectedPerfume(perfume)}
                          >
                            <Icon name="TestTube" size={14} className="mr-1" />
                            Пробник
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-luxury-dark text-white border-luxury-gold max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-montserrat text-luxury-gold">
                              Заказ пробника: {selectedPerfume?.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-white/80 text-sm">
                              Выберите подходящий объем пробника и оцените аромат перед покупкой полноразмерного флакона.
                            </p>
                            
                            {selectedPerfume?.samples && (
                              <div className="space-y-2">
                                {selectedPerfume.samples.map((sample: any, index: number) => (
                                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                                    <div>
                                      <div className="font-semibold text-white text-sm">{sample.volume}</div>
                                      <div className="text-xs text-white/70">{sample.type}</div>
                                    </div>
                                    <div className="text-luxury-pink font-bold">{sample.price}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            <Button className="w-full bg-gradient-to-r from-luxury-gold to-luxury-pink text-black font-semibold">
                              <Icon name="ShoppingCart" size={16} className="mr-2" />
                              Выбрать и заказать
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        size="sm"
                        variant="outline" 
                        className="flex-1 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-xs"
                      >
                        <Icon name="ShoppingCart" size={14} className="mr-1" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
            </div>

            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Каталог</h3>
              <div className="space-y-2 text-white/70 font-open-sans">
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Женские ароматы</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Мужские ароматы</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Унисекс</div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-white/70 font-open-sans">
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Пробники</div>
                <div className="hover:text-luxury-gold transition-colors cursor-pointer">Доставка</div>
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

export default Catalog;