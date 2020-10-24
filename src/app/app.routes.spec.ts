import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { TodosComponent } from './2-todos/todos.component';
import { HomeComponent } from './home/home.component';

describe('routes', () => {
    it('sould contain routes for /users', () => {

        expect(routes).toContain({ path: 'users', component: UsersComponent });
    });

    it('sould contain routes for /users/:id', () => {

        expect(routes).toContain({ path: 'users/:id', component: UserDetailsComponent });
    });

    it('sould contain routes for /todos', () => {

        expect(routes).toContain({ path: 'todos', component: TodosComponent });
    });

    it('sould contain routes for home', () => {

        expect(routes).toContain({ path: '', component: HomeComponent });
    });
});
