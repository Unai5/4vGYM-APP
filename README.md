# 4vGYM-APP
Aplicación para gestionar el gimnasio, sus actividades, monitores y tipos de actividad.

Hemos realizado este proyecto entre Unai Vildarraz Tous y Alex Meleiro Gómez.

Unai: 
  - Tabs y navegación.
  - Sección actividades.
  - Readme.

Alex:
  - Header.
  - Sección monitores.

Hemos utilizado Visual Studio Code para el desarrollo. 

La aplicación está compuesta de componentes, su estructura es:
- AppComponent
  - HeaderComponent
  - TabsComponent
  - Activities
      - DateDisplayComponent
      - CalendarComponent
      - CasillaVaciaComponent
      - CasillaActividadComponent
  - MonitorsComponent
      - MonitorCardsComponent

Tenemos alguno servicios que son los encargados de emitir los datos y trabajar con ellos, con acciones como get, insert, update y delete.
Estos servicios son:
- Activity-service
- Activity-type-service
- Monitors-service
Sus nombres indican el modelo de datos con el que trabajan.

Los estilos han sido diseñados con CSS 3. Hemos utilizado HTML 5 y TypeScript 5.2.2

    
