/*
	https://www.codeproject.com/Articles/577080/Create-an-HTML-and-JavaScript-Maze-Game-with-a-ti
*/

function main() {
	var canvas2d = document.getElementById('2d');
	var ctx_2d = canvas2d.getContext("2d");

	var my_maze = new Maze(MAZESZ);
	my_maze.randPrim(new Pos(0, 0));
	my_maze.pos.x = 1;
	my_maze.pos.y = 1;
	my_maze.draw(ctx_2d, 0, 0, 7, 0);

	TheMaze.randPrim(meta);
	TheMaze.draw(ctx2d, 0, 0, sz, radius);
	for(var i = 0; i < MAZESZ; i++){
	 for(var j = 0; j < MAZESZ; j++){
				if(TheMaze.rooms[i][j] === true && i == 0 && j == 1){
					 cubes.push(new Cube(i, j, textureCubes[0],textureCubes[3]));
				}else if (TheMaze.rooms[i][j] === false){
					 cubes.push(new Cube(i, j, textureCubes[0],textureCubes[0]));
				}
		 }
	}

}()
