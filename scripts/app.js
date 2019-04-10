//Question(text, choices, answer)
var questions = [
    new Question("Which are the main factors that decide the conditions of environment?", 
                 ["Temperature, pressure, wind velocity and humidity of atmosphere.", 
                  "Dragons, faeries, wind gods and advanced magic."], 
                 "Temperature, pressure, wind velocity and humidity of atmosphere."),
    
    new Question("What once covered 14% of the earth’s land area, but by 1991 over half had been destroyed?", 
                 ["Rain forest.", 
                  "Volcanic ash."], 
                 "Rain forest."),
    
    new Question("Which environmental pressure group was founded in the UK in 1971?", 
                 ["Justice League of the UK",
                  "Friends of the earth."], 
                 "Friends of the earth."),
    
    new Question("Which is called the farmers friends?", 
                 ["Caterpillar.", 
                 "Earthworm."], 
                 "Earthworm."),
    
    new Question("How can we reduce the pollution by smoke from factories?", 
                 ["By using electrostatic filters in the chimneys of factories.", 
                  "By using magical filters produced by magical elves."], 
                 "By using electrostatic filters in the chimneys of factories."),
    
    new Question("When the environment is unhealthy and unsafe to living and non-living things, what’s the condition usually known as?", 
                ["Apocalyptic", 
                 "Pollution."], 
                 "Pollution."),
    
    new Question("Those animals which sleep in the day and actively move round during the night are called?", 
                  ["Party animals.", 
                 "Nocturnal animals."], 
                 "Nocturnal animals."),
    
    new Question("What is the main factor responsible for ozone layer depletion?", 
                 ["The use of chlorofluorocarbon by man.", 
                  "Havving a barbecue on a hot summer's day."], 
                 "The use of chlorofluorocarbon by man.")
];

quiz = new Quiz(questions);

QuizUI.displayNext();
