class Inventario:
    def __init__(self, nombre_bebida, cantidad_disponible, ultimo_movimiento, unidades_agregadas):
        self.nombre_bebida = nombre_bebida
        self.cantidad_disponible = cantidad_disponible
        self.ultimo_movimiento = ultimo_movimiento
        self.unidades_agregadas = unidades_agregadas

    def mostrar_unidades_disponibles(self):
        print(f"{self.nombre_bebida}: {self.cantidad_disponible} unidades disponibles")


matrona_clasica = Inventario("Matrona Clásica", 120, "2025-08-20", 20)
matrona_clasica.mostrar_unidades_disponibles()
