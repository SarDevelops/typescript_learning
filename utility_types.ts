
interface UserRecords {
    name: string,
    age: number,
    email: string
}

const updateUser = (user: Partial<UserRecords>) => {
    console.log(user);
}

updateUser({ name: 'sar' });
updateUser({ age: 25 });

type User3 = Partial<UserRecords>;

let user3: User3 = {
    name: 'sar'
}

// Required Utility Types

type User4 = Required<UserRecords>;

let user4: User4 = {
    name: 'sar',
    age: 25,
    email: 'sar@gmail.com'
}

// ReadOnly

type User5 = Readonly<UserRecords>;

let user5: User5 = {
    name: 'sar',
    age: 25,
    email: 'sar@gmail.com'
}

// user5.age = 29;

// pick

type UserInfo = Pick<User5, 'name' | 'email'>;

const userInfo: UserInfo = {
    name: 'sar',
    email: 'sar@gmail.com',
    // age:20
}

// Omit

type UserWithoutEmail = Omit<UserRecords, 'email'>

const userOmitInfo: UserWithoutEmail = {
    name: 'sar',
    // email: 'sar@hmail.com',
    age: 25
}

// Record
type UserRecordInfo = Record<string, number>;
const userRecordInfo: UserRecordInfo = {
    name: 25,
    age: 25,
}

type Role = 'admin' | 'user' | 'manager';
const userRole: Record<Role, string> = {
    admin: 'sanjay',
    user: 'sar',
    manager: 'vinay'
}
console.log(userRole.admin);

// Exclude

type State = 'success' | 'error' | 'loading....';
type ExcludeError = Exclude<State, 'error'>;
const state1: ExcludeError = 'success';
const state2: ExcludeError = 'loading....';

// Extract
type ExtractError = Extract<State, 'error' | 'loading....'>

const state3: ExtractError = 'error';

// NonNullable

type MayBeUser = string | null | undefined;
type UserNull = NonNullable<MayBeUser>;

// const userNull :UserNull = undefined;
const userNull: UserNull = 'sar';

// ReturnType
function getType() {
    return { name: 'sar', age: 25 };
}

type UserReturnType = ReturnType<typeof getType>;

const userReturnType: UserReturnType = { name: 'rana', age: 30 };

// parameters

function updateUserData(name: string, age?: number) {
    console.log(` name: ${name}, age: ${age}`);
}

type UpdateUserParams = Parameters<typeof updateUserData>;
const params: UpdateUserParams = ['sar'];

// Constructor Parameters

class UserDataParam {
    constructor(public name: string, public age: number) {

    };
}
type UserConstructorParams = ConstructorParameters<typeof UserDataParam>;

const userCParams: UserConstructorParams = ['sar', 25];