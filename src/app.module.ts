import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TripsModule } from './trips/trips.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';
import { UssdModule } from './ussd/ussd.module';
import { EmergencyModule } from './emergency/emergency.module';
import { InsuranceModule } from './insurance/insurance.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, VehiclesModule, TripsModule, BookingsModule, PaymentsModule, UssdModule, EmergencyModule, InsuranceModule, NotificationsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
