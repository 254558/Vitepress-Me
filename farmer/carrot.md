# Carrot 

``` py
while True:
	if can_harvest():
		harvest()
	if get_entity_type() == None:
		plant(Entities.Carrot)
	if get_entity_type() == Entities.Grass:
		till()
	move(North)
		
	
```