class ElectricalSubj{
    constructor(name, capacity){
      this.name = name,
      this.capacity = capacity,
      this.status = 'unplugged'
    }
    // Метод, позволяющий включать и выключать прибор
    plug(command){
    if (command != 'plug') {
      console.log(`${this.name} is unplugged.`);
      return this.status = 'unplugged'
    } else {
      console.log(`${this.name} is plugged.`);
      return this.status = 'plugged'
    }
  }
  }
  
  // Прибор 1
  class DeskLamp extends ElectricalSubj{
    constructor(name, capacity, color){
      super(name, capacity);
      this.color = color;
      this.status = 'unplugged';
    }
  }
  
  // Прибор 2
  class Computer extends ElectricalSubj{
    constructor(name, capacity, brand){
      super(name, capacity);
      this.brand = brand;
      this.status = 'unplugged';
    }
  }
  
  // Пустой массив для всех созданных экземпляров приборов
  const all_subj = []
  
  // Функция для подсчета общей мощности включенных приборов
  const capacity_sum = function(){
    let sum = 0;
    for (i in all_subj){
      if(all_subj[i].status == 'plugged'){
        sum += all_subj[i].capacity
      }
    }
    return sum
  }
  
  // Экземпляр прибора 1
  const desk_lamp1 = new DeskLamp('desk_lamp1', 300, 'daylight');
  
  // Экземпляр прибора 2
  const computer1 = new Computer('computer1', 1000, 'Acer');
  
  // Добавление созданных экземпляров приборов в массив
  all_subj.push(desk_lamp1, computer1)
  
  // Включить прибор
  computer1.plug('plug')
  
  // Включить прибор
  desk_lamp1.plug('plug')
  
  // Выключить прибор
  desk_lamp1.plug('')
  
  // Информация по приборам
  console.log(all_subj)
  
  // Подсчет и вывод мощности включенных приборов
  console.log('Total capacity: ' + capacity_sum())